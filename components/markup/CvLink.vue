<template>
	<div class="text-center no-print">
		<button
			type="button"
			@click="handleClick"
			:disabled="isGenerating"
			:aria-busy="isGenerating ? 'true' : 'false'"
			:class="{ 'opacity-60 cursor-wait': isGenerating }"
			class="inline-flex items-center justify-center px-5 py-2 text-lg text-skin-inverted rounded-full bg-skin-accent hover:bg-skin-accent-hover focus:outline-none focus:ring-2"
			data-test="cv-download"
		>
			<fa-icon
				:icon="isGenerating ? 'spinner' : 'file-pdf'"
				:spin="isGenerating"
				class="mr-2"
				aria-hidden="true"
			/>
			<span aria-live="polite">{{ $t(isGenerating ? 'cv.generating' : 'cv.download') }}</span>
		</button>
		<p
			v-if="hasError"
			class="mt-3 text-sm text-skin-danger"
			role="alert"
			data-test="cv-download-error"
		>
			{{ $t('cv.error') }}
		</p>
	</div>
</template>

<script>
import { createCvModel } from '~/utils/cvModel';
import { downloadCv } from '~/utils/downloadCv';

export default {
	data: () => ({ isGenerating: false, hasError: false }),
	methods: {
		async handleClick() {
			if (this.isGenerating) return;
			this.isGenerating = true;
			this.hasError = false;
			try {
				const model = createCvModel({
					t: key => this.$t(key),
					locale: this.$i18n.locale,
					email: this.$config.email,
					phone: this.$config.phone,
					baseUrl: this.$i18n.__baseUrl,
					homePath: this.localePath('index')
				});
				// Let the disabled button and spinner paint even on a warm cache.
				await new Promise(resolve =>
					window.requestAnimationFrame(() => window.setTimeout(resolve, 0))
				);
				await downloadCv(model);
			} catch (error) {
				this.hasError = true;
			} finally {
				this.isGenerating = false;
			}
		}
	}
};
</script>
