<template>
  <div class="container">
    <h2 class="page-title">Обо мне</h2>
    <p class="subtitle">Узнайте больше обо мне</p>
    <div class="wrapper">
      <div class="img-wrapper">
        <img src="../assets/img/me.png" class="img-fluid" alt="Фотография" />
      </div>
      <div class="content">
        <h3 class="content-title">Frontend &amp; Backend разработчик</h3>
        <p class="content-description">
          Закончил онлайн-курсы по HTML / CSS / Java Script / Type Script /
          Node.js / React и самостоятельно изучил Vue / Nuxt.
        </p>
        <div class="wrapper">
          <ul class="list">
            <li class="list-item">
              <strong>Дата рождения:</strong>
              <span>28 Июня 1978</span>
            </li>
            <li class="list-item">
              <strong>Сайт:</strong>
              <span>www.karaudio.ru</span>
            </li>
            <li class="list-item">
              <strong>Телефон:</strong>
              <span>+7 915 545 9396</span>
            </li>
            <li class="list-item">
              <strong>Город:</strong>
              <span>Воронеж, Россия</span>
            </li>
          </ul>
          <ul class="list">
            <li class="list-item">
              <strong>Возраст:</strong>
              <span>45</span>
            </li>
            <li class="list-item">
              <strong>GitHub:</strong>
              <span>github.com/KarpovYuri</span>
            </li>
            <li class="list-item">
              <strong>Email:</strong>
              <span>yurick@bk.ru</span>
            </li>
            <li class="list-item">
              <strong>Freelance:</strong>
              <span>Возможен</span>
            </li>
          </ul>
        </div>
        <p class="content-description">
          Рассматриваю смену профессии в сторону Frontend или Backend -
          разработки. Ищу возможность применить знания на практике. Готов
          выполнить тестовое задание, чтобы продемонстрировать уровень навыков.
        </p>
      </div>
    </div>
  </div>
</template>

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
  background: rgba(0, 0, 0, 0.9);
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
