<template>
  <div class="container">
    <div class="column">
      <h3 class="resume-elem-title">{{ title.sumary }}</h3>
      <div class="experience-item">
        <h4 class="experience-item-title">{{ sumary.title }}</h4>
        <p class="experience-item-dsc">
          <em>{{ sumary.description }}</em>
        </p>
        <ul class="list">
          <li v-for="(item, key) in sumary.list" :key="key">{{ item }}</li>
        </ul>
      </div>
      <h3 class="resume-elem-title">{{ title.education }}</h3>
      <div v-for="(item, key) in education" :key="key" class="experience-item">
        <h4 class="experience-item-title">{{ item.title }}</h4>
        <h5 class="experience-item-years">{{ item.years }}</h5>
        <p class="experience-item-dsc">
          <em>{{ item.organization }}</em>
        </p>
        <p class="experience-item-dsc">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { title, education, sumary } from './data';
export default {
  data() {
    return {
      title,
      education,
      sumary
    };
  }
};
</script>

<style scoped>
.container {
  padding: 30px 0 30px;
}
.column {
  width: 50%;
}

.resume-title {
  font-size: 26px;
  font-weight: 700;
  margin: 20px 0;
  color: var(--main-color);
}
.experience-item {
  padding: 0 0 20px 20px;
  border-left: 2px solid var(--border-second-color);
  position: relative;
}

.experience-item::before {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  left: -9px;
  top: 0;
  background: var(--accent-color);
  box-sizing: border-box;
}

.experience-item:first-of-type,
.experience-item:last-of-type {
  padding-bottom: 0;
}

.experience-item-title {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  color: var(--accent-color);
  margin: 0 0 10px;
}

.experience-item-dsc {
  line-height: 24px;
  margin-top: 0;
}

.list {
  padding-left: 20px;
  margin-top: 0;
}

.list li {
  padding-bottom: 10px;
}

.experience-item-years {
  font-size: 16px;
  background: var(--second-third-color);
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin: 0 0 10px;
}
</style>
