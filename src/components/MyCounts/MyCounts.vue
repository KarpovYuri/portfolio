<template>
  <div class="container">
    <div class="counts-content">
      <div v-for="(count, key) in countsData" :key="key" class="counts-column">
        <div class="count-box">
          <div :class="'counter-icon ' + count.class" />
          <my-count
            :end-count="count.endCount"
            :min-count="minCount"
            :duration="duration"
          />
          <p class="counter-title">{{ count.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const countsData = [
  { title: 'Практических заданий', endCount: 657, class: 'tasks' },
  { title: 'Проектов', endCount: 26, class: 'projects' },
  { title: 'Часов обучения', endCount: 1012, class: 'educate' },
  { title: 'Сертификатов', endCount: 8, class: 'awards' }
];
const minCount = 8;
const duration = 60;
</script>

<style scoped src="./MyCounts.css"></style>
