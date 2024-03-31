<template>
  <section class="container wrapper">
    <div class="img-wrapper">
      <img src="../../assets/img/me.png" class="img-fluid" alt="Фотография" />
    </div>
    <div class="content">
      <h3 class="content-title">Frontend & Backend разработчик</h3>
      <p
        v-for="(content, index) in topContent"
        :key="`top_content_${index}`"
        class="content-description"
      >
        {{ content }}
      </p>
      <div class="wrapper">
        <ul
          v-for="(column, index) in aboutData"
          :key="`column_${index}`"
          class="list"
        >
          <li
            v-for="(row, key) in column.columnData"
            :key="`row_${key}`"
            class="list-item"
          >
            <strong>{{ row.field }}</strong>
            <span>{{ row.value }}</span>
          </li>
        </ul>
      </div>
      <p
        v-for="(content, index) in bottomContent"
        :key="`bottom_content_${index}`"
        class="content-description"
      >
        {{ content }}
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { topContent, bottomContent, aboutData } from './data';
</script>

<style scoped src="./MyAbout.css"></style>
