<template>
  <div class="container">
    <h2 class="page-title">{{ title }}</h2>
    <div class="skills-content">
      <div v-for="(list, index) in lists" :key="index" class="skills-column">
        <div v-for="(skill, key) in list.field" :key="key" class="progress">
          <span class="skill">
            {{ skill.skillName }}
            <i class="skill-value">{{ skill.value }}</i>
          </span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" :style="'width:' + skill.value" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const list1 = ref([
      { skillName: 'HTML', value: '95%' },
      { skillName: 'CSS', value: '85%' },
      { skillName: 'JavaScript', value: '90%' },
      { skillName: 'TypeScript', value: '60%' }
    ]);
    const list2 = ref([
      { skillName: 'React / Redux', value: '80%' },
      { skillName: 'Vue / Nuxt / Vuex', value: '60%' },
      { skillName: 'Node JS', value: '75%' },
      { skillName: 'MongoDB', value: '65%' }
    ]);
    const lists = ref([{ field: list1 }, { field: list2 }]);
    return { lists, list1, list2 };
  },
  data() {
    return {
      title: 'Мой стек'
    };
  }
};
</script>

<!-- <script lang="ts" setup>
import { ref, onMounted } from 'vue';
const progress = ref([]);
onMounted(() => progress.value);
</script> -->

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
