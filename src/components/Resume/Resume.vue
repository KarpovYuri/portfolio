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
          <li v-for="(contact, index) in sumary.contacts" :key="index">
            {{ contact }}
          </li>
        </ul>
      </div>
      <h3 class="resume-elem-title">{{ title.education }}</h3>
      <div v-for="(education, key) in educations" :key="key" class="experience-item">
        <h4 class="experience-item-title">{{ education.title }}</h4>
        <h5 class="experience-item-years">{{ education.years }}</h5>
        <p class="experience-item-dsc">
          <em>{{ education.organization }}</em>
        </p>
        <p class="experience-item-dsc">{{ education.description }}</p>
        <ul v-if="education.skills" class="list">
          <li v-for="(skill, index) in education.skills" :key="index">
            {{ skill }}
          </li>
        </ul>
        <ul v-if="education.projects" class="list">
          <li v-for="(project, index) in education.projects" :key="index" class="list-item">
            <a class="experience-item-link" :href="project.href" target="_blank">
              {{ project.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="column">
      <h3 class="resume-elem-title">{{ title.experience }}</h3>
      <div v-for="(experience, key) in experiences" :key="key" class="experience-item">
        <h4 class="experience-item-title">{{ experience.title }}</h4>
        <h5 class="experience-item-years">{{ experience.years }}</h5>
        <p class="experience-item-dsc">
          <em>{{ experience.organization }}</em>
        </p>
        <p v-for="(desc, index) in experience.description" :key="index" class="experience-item-dsc">
          {{ desc }}
        </p>
        <ul v-if="experience.projects" class="list">
          <li v-for="(project, index) in experience.projects" :key="index" class="list-item">
            <a class="experience-item-link" :href="project.href" target="_blank">
              {{ project.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { title, educations, sumary, experiences } from './data';
export default {
  data() {
    return {
      title,
      educations,
      sumary,
      experiences
    };
  }
};
</script>

<style scoped>
.container {
  padding: 30px 0 30px;
  display: flex;
  gap: 24px;
}
.column {
  width: 50%;
}

.resume-elem-title {
  font-size: 26px;
  font-weight: 700;
  margin: 20px 0;
  color: var(--main-color);
}
.experience-item {
  padding: 0 0 8px 20px;
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
  line-height: 22px;
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
  margin-bottom: 16px;
}

.experience-item-dsc:last-child {
  margin-bottom: 24px;
}

.experience-item-link {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: var(--link-color);
}

.experience-item-link::before {
  content: '';
  position: absolute;
  height: 2px;
  bottom: 6px;
  background-color: var(--accent-color);
  visibility: hidden;
  width: 0;
  transition: all 0.3s ease-in-out 0s;
}

.experience-item-link:hover::before {
  visibility: visible;
  width: 60px;
}

.list {
  padding-left: 20px;
  margin-top: 0;
  margin-bottom: 16px;
}

.list li {
  padding-bottom: 10px;
}

.list-item {
  list-style: none;
  position: relative;
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
