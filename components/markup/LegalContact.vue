<template>
	<address class="not-italic space-y-2" data-test="legal-contact">
		<p class="font-semibold">{{ $config.legalName }}</p>
		<p class="whitespace-pre-line">{{ $config.legalAddress }}</p>
		<p>
			{{ $t('bio.email') }}:
			<a :href="`mailto:${$config.email}`" class="text-skin-accent underline break-all">{{
				$config.email
			}}</a>
		</p>
		<p>
			{{ $t('bio.phone') }}:
			<a :href="`tel:${$config.phone.replace(/[^+\d]/g, '')}`" class="text-skin-accent underline">{{
				$config.phone
			}}</a>
		</p>
	</address>
</template>
