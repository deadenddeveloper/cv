<template>
  <div class="space-y-10">
    <section-header :title="$t('sections.education')" icon="university" />

    <div
      v-for="(place, index) in education"
      :key="place.name"
      class="flex flex-col md:flex-row space-x-0 md:space-x-5"
      data-test="education-item"
    >
      <div class="text-left md:text-center">
        <strong class="relative h-8 pt-1.5 w-64 bg-none md:bg-skin-accent text-skin-base md:text-skin-inverted inline-block text-base md:text-sm whitespace-nowrap">
          <span class="relative z-10">{{ $t(place.time) }}</span>
          <span class="absolute top-1 -right-3 hidden md:inline-block h-6 w-6 bg-skin-accent transform rotate-45 z-0">&nbsp;</span>
        </strong>
      </div>
      <div class="hidden md:block">
        <span class="ml-3 mt-3 mb-3 block h-3 w-3 bg-skin-accent rounded-full">&nbsp;</span>
        <span v-if="index !== education.length - 1" class="inline-block ml-4 border-r border-skin-base h-full"></span>
      </div>
      <div class="flex-grow space-y-2 mt-1">
        <div class="text-lg text-skin-accent">
          <a
            v-if="place.link"
            :href="place.link"
            class="text-lg text-skin-accent cursor-pointer underline"
            target="_blank"
          >{{ $t(place.name) }}</a>
          <span v-else class="text-lg text-skin-accent">
						{{ $t(place.name) }}
					</span>
        </div>
        <div>{{ $t(place.location) }}</div>
        <div>{{ $t(place.post) }}</div>
        <div class="text-sm text-left">{{ $t(place.speciality) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import education from '~/data/education'

export default {
  data: () => ({
    education,
  }),
}
</script>
