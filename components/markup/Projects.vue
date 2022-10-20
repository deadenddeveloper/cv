<template>
  <div class="space-y-10">
    <section-header :title="$t('sections.projects')" icon="lightbulb" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="project in projects"
        :key="project.name"
        class="flex flex-col space-y-5"
        data-test="projects-item"
      >
        <h3 class="text-xl text-skin-accent text-center w-full">
          <a :href="project.link" target="_blank" class="cursor-pointer underline">{{ $t(project.name) }}</a>
        </h3>
        <p class="text-sm text-justify">{{ $t(project.description) }}</p>
        <tag-list :tags="project.tags" />
      </div>
    </div>
  </div>
</template>

<script>
import projects from '~/data/projects'

export default {
  data: () => ({
    projects,
  }),
}
</script>
