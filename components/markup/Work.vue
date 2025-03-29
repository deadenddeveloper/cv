<template>
	<div class="space-y-10">
		<section-header :title="$t('sections.work')" icon="briefcase" />

		<div
			v-for="(place, index) in work"
			:key="place.firm"
			class="flex flex-col md:flex-row space-x-0 md:space-x-5"
			data-test="work-item"
		>
			<div class="text-left md:text-center">
				<strong
					class="relative h-8 pt-1.5 w-64 bg-none md:bg-skin-accent text-skin-base md:text-skin-inverted inline-block text-base md:text-sm whitespace-nowrap"
				>
					<span class="relative z-10">{{ $t(place.time) }}</span>
					<span
						class="absolute top-1 -right-3 hidden md:inline-block h-6 w-6 bg-skin-accent transform rotate-45 z-0"
						>&nbsp;</span
					>
				</strong>
			</div>
			<div class="hidden md:block">
        <img
          v-if="place.image"
          class="inline-block rounded-full ml-1 mt-1 w-6 h-6"
          height="24"
          width="24"
          style="min-width: 24px"
          :alt="$t(place.firm)"
          :src="require(`~/assets/img/companies/${place.image}`)"
        />
				<span v-if="!place.image" class="inline-block ml-1 mt-1 h-6 w-6 bg-skin-accent rounded-full">&nbsp;</span>
				<span
					v-if="index !== work.length - 1"
					class="inline-block ml-4 mt-2 border-r border-skin-base h-full"
				></span>
			</div>
			<div class="flex-grow space-y-2 mt-1">
				<div>
          <img
            v-if="place.image"
            class="inline md:hidden rounded-full w-6 h-6"
            height="24"
            width="24"
            :alt="$t(place.firm)"
            :src="require(`~/assets/img/companies/${place.image}`)"
          />
					<a
						v-if="place.link"
						:href="place.link"
						class="text-lg text-skin-accent cursor-pointer underline"
						target="_blank"
						>{{ $t(place.firm) }}</a
					>
					<span v-else class="text-lg text-skin-accent">
						{{ $t(place.firm) }}
					</span>
					<span>{{ $t(place.location) }}</span>
				</div>
				<div>{{ $t(place.post) }}</div>
				<div class="text-sm text-justify">{{ $t(place.description) }}</div>
				<tag-list :tags="place.tags" />
			</div>
		</div>
	</div>
</template>

<script>
import work from '~/data/work';

export default {
	data: () => ({
		work
	})
};
</script>
