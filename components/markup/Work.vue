<template>
  <div class="space-y-10">
    <section-header :title="$t('sections.work')" icon="briefcase" />

    <div
      v-for="(place, index) in work"
      :key="place.firm"
      class="flex flex-col md:flex-row space-x-0 md:space-x-5"
    >
      <div class="text-left md:text-center">
        <strong class="relative h-8 pt-1.5 w-64 bg-none md:bg-skin-accent text-skin-base md:text-skin-inverted inline-block text-base md:text-sm whitespace-nowrap">
          <span class="relative z-10">{{ $t(place.time) }}</span>
          <span class="absolute top-1 -right-3 hidden md:inline-block h-6 w-6 bg-skin-accent transform rotate-45 z-0">&nbsp;</span>
        </strong>
      </div>
      <div class="hidden md:block">
        <span class="ml-3 mt-3 inline-block h-3 w-3 bg-skin-accent rounded-full">&nbsp;</span>
        <span v-if="index !== work.length - 1" class="inline-block ml-4 border-r border-skin-base h-full"></span>
      </div>
      <div class="flex-grow space-y-2 mt-1">
        <div>
          <span class="text-lg text-skin-accent">{{ $t(place.firm) }}</span>
          <span>{{ $t(place.location) }}</span>
        </div>
        <div>{{ $t(place.post) }}</div>
        <div class="text-sm text-justify">{{ $t(place.description) }}</div>
        <div class="space-x-2">
          <span
            v-for="tag in place.tags"
            :key="tag"
            class="text-sm bg-skin-accent text-skin-inverted px-2 py-0.5 rounded-full whitespace-nowrap"
          >{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import work from '~/data/work'

export default {
  data: () => ({
    work,
  }),
}
</script>
