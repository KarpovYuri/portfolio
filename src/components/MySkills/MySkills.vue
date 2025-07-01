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
      { name: 'HTML', value: 90 },
      { name: 'CSS / Sass / SCSS', value: 90 },
      { name: 'JavaScript', value: 85 },
      { name: 'TypeScript', value: 85 },
      { name: 'Golang', value: 50 }
    ]
  },
  {
    column: [
      { name: 'Vue / Nuxt', value: 95 },
      { name: 'Angular', value: 80 },
      { name: 'React', value: 80 },
      { name: 'Node JS / Express / Mongoose', value: 60 },
      { name: 'MongoDB / PostgreSQL', value: 60 }
    ]
  }
];
</script>

<style scoped src="./MySkills.css"></style>
