<template>
  <div class="space-y-10 no-print">
    <section-header :title="$t('sections.projects')" icon="lightbulb" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-8">
      <div
        v-for="project in projects"
        :key="project.name"
        class="flex flex-col space-y-5"
        data-test="projects-item"
      >
        <h3 class="text-xl text-skin-accent text-center w-full">
          <a
            @click="() => gtmPushProjectOpened(project.link)"
            :href="project.link"
            target="_blank"
            class="cursor-pointer underline inline-flex items-center justify-center"
            rel="noopener noreferrer"
          >
            <img
              v-if="project.image"
              :src="require(`~/assets/img/projects/${project.image}`)"
              alt=""
              width="28"
              height="28"
              class="w-7 h-7 mr-2 object-contain flex-shrink-0"
              loading="lazy"
            />
            <fa-icon v-else :icon="project.icon" class="w-7 h-7 mr-2 flex-shrink-0" aria-hidden="true" />
            {{ $t(project.name) }}
          </a>
        </h3>
        <p class="text-sm text-justify" style="text-indent: 20px;">{{ $t(project.description) }}</p>
        <tag-list :tags="project.tags" />
      </div>
    </div>
  </div>
</template>

<script>
import projects from '~/data/projects';
import { gtmPushProjectOpened } from '~/utils/gtm';

export default {
  methods: {
    gtmPushProjectOpened
  },
  data: () => ({
    projects
  })
};
</script>
