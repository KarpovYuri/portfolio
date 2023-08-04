<template>
  <div class="container">
    <h2 class="page-title">Мой стек</h2>
    <div class="skills-content">
      <div class="skills-column">
        <div class="progress">
          <span class="skill">HTML<i class="skill-value">95%</i> </span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" />
          </div>
        </div>

        <div class="progress">
          <span class="skill">CSS<i class="skill-value">85%</i></span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" />
          </div>
        </div>

        <div class="progress">
          <span class="skill">JavaScript<i class="skill-value">90%</i> </span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" />
          </div>
        </div>

        <div class="progress">
          <span class="skill">TypeScript<i class="skill-value">60%</i> </span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" />
          </div>
        </div>
      </div>

      <div class="skills-column">
        <div class="progress">
          <span class="skill">
            React / Redux<i class="skill-value">80%</i>
          </span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" />
          </div>
        </div>

        <div class="progress">
          <span class="skill">
            Vue / Nuxt / Vuex<i class="skill-value">60%</i>
          </span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" />
          </div>
        </div>

        <div ref="progress" class="progress">
          <span class="skill">Node JS<i class="skill-value">75%</i></span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" />
          </div>
        </div>

        <div ref="progress" class="progress">
          <span class="skill">MongoDB<i class="skill-value">65%</i></span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const progress = ref([]);
onMounted(() => progress.value);
</script>

<style scoped>
.container {
  background: rgba(0, 0, 0, 0.9);
  padding: 30px;
}
.skills-content {
  display: flex;
  gap: 24px;
}
.skills-column {
  width: 50%;
}

.progress {
  min-height: 60px;
}

.skill {
  padding: 10px 0;
  text-transform: uppercase;
  display: block;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}

.skill-value {
  float: right;
  font-style: normal;
}

.progress-bar-wrap {
  background: rgba(255, 255, 255, 0.2);
}

.progress-bar {
  width: 1px;
  height: 10px;
  transition: 0.9s;
  background-color: var(--accent-color);
}
</style>
