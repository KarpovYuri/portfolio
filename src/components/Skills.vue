<template>
  <div class="container">
    <h2 class="page-title">{{ title }}</h2>
    <div class="skills-content">
      <div v-for="(list, index) in lists" :key="index" class="skills-column">
        <div v-for="(skill, key) in list.field" :key="key" class="progress">
          <span class="skill">
            {{ skill.skillName }}
            <i class="skill-value">{{ skill.value }}%</i>
          </span>
          <div class="progress-bar-wrap">
            <div
              ref="progress"
              class="progress-bar"
              :style="'width:' + skill.startValue + '%'"
            />
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
      { skillName: 'HTML', startValue: 0, value: 95 },
      { skillName: 'CSS / Sass / SCSS', startValue: 0, value: 95 },
      { skillName: 'JavaScript', startValue: 0, value: 90 },
      { skillName: 'TypeScript', startValue: 0, value: 70 }
    ]);
    const list2 = ref([
      { skillName: 'React / Redux', startValue: 0, value: 90 },
      { skillName: 'Vue / Nuxt / Vuex', startValue: 0, value: 70 },
      { skillName: 'Node JS / Express / Mongoose', startValue: 0, value: 85 },
      { skillName: 'MongoDB / PostgreSQL / MySQL', startValue: 0, value: 75 }
    ]);
    const lists = ref([{ field: list1 }, { field: list2 }]);
    setTimeout(() => {
      list1.value.forEach((element) => {
        element.startValue = element.value;
      });
      list2.value.forEach((element) => {
        element.startValue = element.value;
      });
    }, 75);
    return { lists, list1, list2 };
  },
  data() {
    return {
      title: 'Мой стек'
    };
  }
};
</script>

<style scoped>
.container {
  background: var(--background-color);
  padding: 30px;
}
.skills-content {
  display: flex;
  gap: 24px;
}
.skills-column {
  width: calc(50% - 24px / 2);
}

.progress {
  min-height: 60px;
}

.skill {
  padding: 10px 0;
  text-transform: uppercase;
  display: block;
  font-size: 14px;
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
  transition: 1s;
  background-color: var(--accent-color);
}

@media (max-width: 768px) {
  .skills-content {
    flex-direction: column;
    gap: 0;
  }
  .skills-column {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .skill {
    font-size: 12px;
    padding: 8px 0;
  }
  .progress {
    min-height: 52px;
  }
  .progress-bar {
    height: 8px;
  }
}
</style>
