<template>
  <div class="container">
    <page-title title="Мой стек" />
    <div class="skills-content">
      <div
        v-for="(columnData, index) in skillsData"
        :key="`column_data_${index}`"
        class="skills-column"
      >
        <div
          v-for="(skill, key) in columnData.column"
          :key="`skill_${key}`"
          class="progress"
        >
          <span class="skill">
            {{ skill.name }}
            <i class="skill-value">{{ skill.value }}%</i>
          </span>
          <my-skills-progress-bar :value="skill.value" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const skillsData = [
  {
    column: [
      { name: 'HTML', value: 95 },
      { name: 'CSS / Sass / SCSS', value: 90 },
      { name: 'JavaScript', value: 85 },
      { name: 'TypeScript', value: 80 }
    ]
  },
  {
    column: [
      { name: 'Vue / Nuxt ', value: 90 },
      { name: 'React / Redux', value: 90 },
      { name: 'Node JS / Express / Mongoose', value: 80 },
      { name: 'MongoDB / PostgreSQL', value: 75 }
    ]
  }
];
</script>

<style scoped src="./MySkills.css"></style>
