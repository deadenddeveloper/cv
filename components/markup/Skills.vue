<template>
  <div class="space-y-10">
    <section-header :title="$t('sections.skills')" icon="laptop-code" />

    <div
      v-for="group in skills"
      :key="group.name"
      class="text-lg"
      :data-test="`skill-group-${group.name}`"
    >
      <ul class="space-y-2">
        <li v-for="skill in group.skills" class="flex" data-test="skill-item">
          <span class="text-skin-accent w-6 flex-shrink-0 text-center mr-4">
            <fa-icon :icon="skill.icon" />
          </span>
          <span>{{ $t(skill.text) }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import skills from '~/data/skills'

export default {
  data: () => ({
    skills,
  }),
}
</script>
