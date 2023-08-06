<template>
  <div class="container">
    <h2 class="page-title">{{ title }}</h2>
    <div class="tools-content">
      <div v-for="(tool, key) in tools" :key="key" class="tools-column">
        <div class="tool-box">
          <div :class="'tool-icon ' + tool.class" />
          <h3 class="tool-title">{{ tool.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      title: 'Мои инструменты',
      tools: [
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
        { title: 'Joomla', class: 'joomla' }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  background: var(--background-color);
  padding: 30px;
}

.tools-content {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.tools-column {
  width: calc(25% - 24px * 3 / 4);
}
.tool-box {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.08);
  transition: ease-in-out 0.3s;
}

.tool-icon {
  height: 32px;
  width: 32px;
  background-size: 32px 32px;
  border: none;
  background-color: transparent;
}

.tool-title {
  font-size: 16px;
  font-weight: 700;
  margin: 0;
}

.tool-box:hover {
  background: rgba(255, 255, 255, 0.12);
}

.webpack {
  background-image: url('../assets/icons/tools/webpack.svg');
}

.vite {
  background-image: url('../assets/icons/tools/vite.svg');
}
.git {
  background-image: url('../assets/icons/tools/git.svg');
}
.npm {
  background-image: url('../assets/icons/tools/npm.svg');
}
.yarn {
  background-image: url('../assets/icons/tools/yarn.svg');
}

.vscode {
  background-image: url('../assets/icons/tools/vscode.svg');
}

.postman {
  background-image: url('../assets/icons/tools/postman.svg');
}

.figma {
  background-image: url('../assets/icons/tools/figma.svg');
}
.docker {
  background-image: url('../assets/icons/tools/docker.svg');
}
.nginx {
  background-image: url('../assets/icons/tools/nginx.svg');
}

.joomla {
  background-image: url('../assets/icons/tools/joomla.svg');
}
.webstorm {
  background-image: url('../assets/icons/tools/webstorm.svg');
}
</style>
