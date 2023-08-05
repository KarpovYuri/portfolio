<template>
  <div class="container">
    <h2 class="page-title">{{ title }}</h2>
    <p class="subtitle">{{ subtitle }}</p>
    <div class="wrapper">
      <div class="img-wrapper">
        <img src="../assets/img/me.png" class="img-fluid" alt="Фотография" />
      </div>
      <div class="content">
        <h3 class="content-title">{{ contentTitle }}</h3>
        <p class="content-description">{{ contentDesc1 }}</p>
        <div class="wrapper">
          <ul v-for="(ul, index) in uls" :key="index" class="list">
            <li v-for="(item, key) in ul.field" :key="key" class="list-item">
              <strong>{{ item.field }}</strong>
              <span>{{ item.value }}</span>
            </li>
          </ul>
        </div>
        <p class="content-description">{{ contentDesc2 }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const list1 = ref([
      { field: 'Дата рождения:', value: '28 Июня 1993' },
      { field: 'Сайт:', value: 'www.karaudio.ru' },
      { field: 'Телефон:', value: '+7 915 545 9396' },
      { field: 'Город:', value: 'Воронеж, Россия' }
    ]);
    const list2 = ref([
      { field: 'Возраст:', value: '30' },
      { field: 'GitHub:', value: 'github.com/KarpovYuri' },
      { field: 'Email:', value: 'yurick@bk.ru' },
      { field: 'Freelance:', value: 'Возможен' }
    ]);
    const uls = ref([{ field: list1 }, { field: list2 }]);
    return { uls, list1, list2 };
  },
  data() {
    return {
      title: 'Обо мне',
      subtitle: 'Узнайте больше обо мне',
      contentTitle: 'Frontend & Backend разработчик',
      contentDesc1:
        'Закончил онлайн-курсы по HTML / CSS / Java Script / Type Script / Node.js / React и самостоятельно изучил Vue / Nuxt.',
      contentDesc2:
        'Рассматриваю смену профессии в сторону Frontend или Backend - разработки. Ищу возможность применить знания на практике. Готов выполнить тестовое задание, чтобы продемонстрировать уровень навыков.'
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
  background: var(--background-color);
  padding: 30px;
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
  background: url(../assets/icons/chevron-right.svg) no-repeat 0 1px;
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
  .container {
    padding: 30px 20px;
  }

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
