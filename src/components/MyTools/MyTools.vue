<template>
  <div class="container">
    <page-title title="Мои инструменты" />
    <div class="tools-content">
      <div
        v-for="(tool, index) in tools"
        :key="`tool_${index}`"
        class="tools-column"
      >
        <my-tools-elem :title="tool.title" :icon-class="tool.class" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const tools = [
  { title: 'VScode', class: 'vscode' },
  { title: 'WebStorm', class: 'webstorm' },
  { title: 'Postman', class: 'postman' },
  { title: 'Figma', class: 'figma' },
  { title: 'Webpack', class: 'webpack' },
  { title: 'Vite', class: 'vite' },
  { title: 'Git', class: 'git' },
  { title: 'Docker', class: 'docker' },
  { title: 'Npm', class: 'npm' },
  { title: 'Yarn', class: 'yarn' },
  { title: 'Nginx', class: 'nginx' },
  { title: 'Tailwind', class: 'tailwind' }
];
</script>

<style scoped src="./MyTools.css"></style>
