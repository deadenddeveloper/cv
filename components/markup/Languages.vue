<template>
  <div class="space-y-10">
    <section-header :title="$t('sections.languages')" icon="language" />

    <div
      v-for="lang in languages"
      :key="lang.name"
    >
      <div class="text-lg">{{ $t(lang.name) }}</div>
      <div class="relative pt-1 my-2">
        <div class="overflow-hidden h-2 flex bg-skin-muted bg-opacity-25">
          <div :style="{width: `${lang.level[0] / 4}%`}" v-tooltip="$t('languages.reading')" class="cursor-pointer bg-skin-accent"></div>
          <div :style="{width: `${lang.level[1] / 4}%`}" v-tooltip="$t('languages.writing')" class="cursor-pointer bg-skin-accent bg-opacity-75"></div>
          <div :style="{width: `${lang.level[2] / 4}%`}" v-tooltip="$t('languages.listening')" class="cursor-pointer bg-skin-accent bg-opacity-50"></div>
          <div :style="{width: `${lang.level[3] / 4}%`}" v-tooltip="$t('languages.speaking')" class="cursor-pointer bg-skin-accent bg-opacity-25"></div>
        </div>
      </div>
      <div class="text-sm">{{ $t(lang.description) }}</div>
    </div>
  </div>
</template>

<script>
import languages from '~/data/languages'

export default {
  data: () => ({
    languages,
  }),
}
</script>
