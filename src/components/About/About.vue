<template>
  <div class="container wrapper">
    <div class="img-wrapper">
      <img src="../../assets/img/me.png" class="img-fluid" alt="Фотография" />
    </div>
    <div class="content">
      <h3 class="content-title">{{ contentTitle }}</h3>
      <p
        v-for="(content, index) in topContent"
        :key="index"
        class="content-description"
      >
        {{ content }}
      </p>
      <div class="wrapper">
        <ul v-for="(ul, index) in uls" :key="index" class="list">
          <li v-for="(item, key) in ul.field" :key="key" class="list-item">
            <strong>{{ item.field }}</strong>
            <span>{{ item.value }}</span>
          </li>
        </ul>
      </div>
      <p
        v-for="(content, index) in bottomContent"
        :key="index"
        class="content-description"
      >
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  contentTitle,
  topContent,
  bottomContent,
  aboutLeftData,
  aboutRightData
} from './data';
export default {
  setup() {
    const list1 = ref(aboutLeftData);
    const list2 = ref(aboutRightData);
    const uls = ref([{ field: list1 }, { field: list2 }]);
    return { uls, list1, list2 };
  },
  data() {
    return {
      contentTitle,
      topContent,
      bottomContent
    };
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}

.img-wrapper {
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-fluid {
  max-width: 85%;
  max-height: 85%;
  border: solid 2px var(--border-color);
  border-radius: 50%;
}

.container {
  padding: 30px 0 30px;
}

.content {
  width: 67%;
  padding: 0 12px;
  box-sizing: border-box;
}

.content-title {
  font-weight: 700;
  font-size: 26px;
  color: var(--accent-color);
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.content-description {
  font-style: italic;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 1rem;
}

.list {
  width: 50%;
  list-style: none;
  padding: 0;
}

.list-item {
  background: url(../../assets/icons/chevron-right.svg) no-repeat 0 1px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding-left: 21px;
}

.list-item strong {
  margin-right: 10px;
}

.content-description:last-child {
  margin-bottom: 0;
  font-style: normal;
}

@media (max-width: 992px) {
  .content .wrapper {
    flex-direction: column;
  }

  .list {
    width: 100%;
  }

  .list:first-child {
    margin-bottom: 0;
  }

  .list:last-child {
    margin-top: 0;
  }
}

@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
  }

  .content {
    width: 100%;
  }

  .img-wrapper {
    width: 65%;
    align-self: center;
    margin-top: 15px;
    margin-bottom: 30px;
  }
}

@media (max-width: 576px) {
  .img-wrapper {
    width: 75%;
  }

  .content {
    padding: 0;
  }

  .content-description {
    font-size: 14px;
  }

  .list {
    font-size: 14px;
  }

  .content-title {
    font-size: 24px;
  }
}
</style>
