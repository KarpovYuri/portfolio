<template>
  <div class="container">
    <div class="counts-content">
      <div v-for="(count, key) in counts" :key="key" class="counts-column">
        <div class="count-box">
          <div :class="'counter-icon ' + count.class" />
          <span class="purecounter">{{ count.number }}</span>
          <p class="counter-title">{{ count.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      counts: [
        { title: 'Практических заданий', number: 657, class: 'tasks' },
        { title: 'Проекта', number: 23, class: 'projects' },
        { title: 'Часов обучения', number: 1012, class: 'educate' },
        { title: 'Сертификатов', number: 8, class: 'awards' }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  background: var(--second-bg-color);
  padding: 30px;
}

.counts-content {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.counts {
  padding: 70px 0 60px;
}

.counts-column {
  width: calc(25% - 24px * 3 / 4);
}

.count-box {
  padding: 30px 26px 25px 26px;
  position: relative;
  text-align: center;
  background: var(--accent-second-color);
  box-sizing: border-box;
}

.counter-icon {
  height: 48px;
  width: 48px;
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: center;
}

.purecounter {
  font-size: 36px;
  font-weight: 600;
  line-height: 54px;
}

.counter-title {
  padding: 0;
  margin: 0;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
}

.tasks {
  background-image: url('../assets/icons/counts/tasks.svg');
}
.projects {
  background-image: url('../assets/icons/counts/projects.svg');
}
.educate {
  background-image: url('../assets/icons/counts/educate.svg');
}
.awards {
  background-image: url('../assets/icons/counts/awards.svg');
}

@media (max-width: 992px) {
  .counts-content {
    row-gap: 48px;
  }
  .counts-column {
    width: calc(50% - 24px / 2);
  }
}

@media (max-width: 576px) {
  .counts-content {
    gap: 48px;
  }
  .counts-column {
    width: 100%;
  }
}
</style>
