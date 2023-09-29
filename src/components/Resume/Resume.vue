<template>
  <div class="container">
    <div class="column">
      <h3 class="resume-title">Общая информация</h3>
      <div class="resume-item">
        <h4 class="experience-title">Юрий Карпов</h4>
        <p class="experience-dsc">
          <em>
            Веб-программист, с более чем 3-летним опытом разработки сайтов и
            веб-приложений от первоначальной концепции до окончательного
            результата.
          </em>
        </p>
        <ul class="list">
          <li>Воронеж, Россия</li>
          <li>+7 (950) 775 75 33</li>
          <li>yurick@bk.ru</li>
        </ul>
      </div>
      <h3 class="resume-title">Образование</h3>
      <div class="resume-item">
        <h4 class="experience-title">Мидл фронтенд-разработчик</h4>
        <h5 class="experience-years">11.2022 - 05.2023</h5>
        <p class="experience-dsc"><em>Яндекс Практикум</em></p>
        <p class="experience-dsc">
          Прошел обучение на факультете Веб-разработки: JavaScript, TypeScript,
          React, Redux, NodeJS, SSR, PostgreSQL, Алгоритмы и структуры данных,
          Шаблонизаторы и компонентный подход, Тестирование и безопасность.
        </p>
      </div>
      <div class="resume-item">
        <h4 class="experience-title">Веб-разработчик</h4>
        <h5 class="experience-years">11.2021 - 09.2022</h5>
        <p class="experience-dsc"><em>Яндекс Практикум</em></p>
        <p class="experience-dsc">
          Прошел обучение на факультете Веб-разработки: HTML, CSS, JavaScript,
          Адаптивная вёрстка и работа с макетом, React, NodeJS, ExpressJS,
          MongoDB
        </p>
      </div>
      <div class="resume-item">
        <h4 class="experience-title">Программист</h4>
        <h5 class="experience-years">1998 - по настоящее время</h5>
        <p class="experience-dsc">
          <em> Самостоятельное обучение.</em>
        </p>
        <p class="experience-dsc">
          Программированием интересовался с малолетства: Basic, Ассемблер,
          Паскаль, C++. В начале 00-х открыл для себя мир веб-разработки, были
          изучены HTML, CSS, JS и сверстаны первые сайты в том числе на CMS. Из
          последнего освоен Vue и Nuxt.
        </p>
      </div>
      <div class="resume-item">
        <h4 class="experience-title">Экономист-менеджер</h4>
        <h5 class="experience-years">2005 - 2010</h5>
        <p class="experience-dsc">
          <em>Воронежский государственный университет инженерных технологий</em>
        </p>
        <p class="experience-dsc">
          Факультет экономики и менеджмента, Экономика и управление на
          предприятиях пищевой промышленности
        </p>
      </div>
    </div>
  </div>
</template>

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
.resume-item {
  padding: 0 0 20px 20px;
  border-left: 2px solid var(--border-second-color);
  position: relative;
}

.resume-item::before {
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

.resume-item:first-of-type,
.resume-item:last-of-type {
  padding-bottom: 0;
}

.experience-title {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  color: var(--accent-color);
  margin: 0 0 10px;
}

.experience-dsc {
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

.experience-years {
  font-size: 16px;
  background: var(--second-third-color);
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin: 0 0 10px;
}
</style>
