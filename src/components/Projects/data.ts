import dinamikPreview from '../../assets/img/projects/dinamik.webp';
import vrtPreview from '../../assets/img/projects/vrtstudio.webp';
import htlPreview from '../../assets/img/projects/htl.webp';
import wordpressPreview from '../../assets/img/projects/wordpress.webp';
import uberPreview from '../../assets/img/projects/uber.webp';
import russianTravelPreview from '../../assets/img/projects/russian-travel.webp';
import mestoPreview from '../../assets/img/projects/Mesto.webp';
import mestoBackendPreview from '../../assets/img/projects/Mesto-backend.webp';
import mestoReactPreview from '../../assets/img/projects/Mesto-react-frontend.webp';
import moviesReactPreview from '../../assets/img/projects/Movies.webp';
import moviesApiPreview from '../../assets/img/projects/Movies-api.webp';
import chatPreview from '../../assets/img/projects/chat.webp';
import arkanoidPreview from '../../assets/img/projects/arkanoid.webp';
import portfolioPreview from '../../assets/img/projects/portfolio.webp';
import runToLivePreview from '../../assets/img/projects/run-to-live.webp';
import bimAssistPromoPreview from '../../assets/img/projects/bimassist-promo.webp';
import bimAssistCRMPreview from '../../assets/img/projects/bimassist-crm.webp';
import bimAssistClientsPreview from '../../assets/img/projects/bimassist-clients.webp';

export const projects = [
  {
    preview: bimAssistCRMPreview,
    title: 'BimAssist CRM',
    demoLink: 'https://crm.dev-bimassist.ru/',
    description: 'CRM-система BimAssist.',
    functional:
      'Цифровой помощник грyмера. Автоматизация записи клиентов и расписания.',
    technologies:
      'HTML, CSS, SASS, Tailwind, JavaScript, TypeScript, Vue, Vuex, Pinia, VueRouter, Axios, Vite'
  },
  {
    preview: bimAssistClientsPreview,
    title: 'BimAssist Clients',
    demoLink: 'https://clients.bimassist.ru/2/',
    description: 'Клиентское приложение BimAssist.',
    functional:
      'Приложение для записи питомцев на груминг и вет услуги.',
    technologies:
      'HTML, CSS, SASS, Tailwind, JavaScript, TypeScript, Vue, Vuex, Pinia, VueRouter, Axios, Vite'
  },
  {
    preview: bimAssistPromoPreview,
    title: 'BimAssist Promo',
    demoLink: 'https://bimassist.ru/',
    description: 'Сайт CRM-системы BimAssist.',
    functional: 'Промо сайт CRM-системы для грумеров.',
    technologies: 'HTML, CSS, Tailwind, JavaScript, Vite'
  },
  {
    preview: portfolioPreview,
    title: 'Портфолио',
    codeLink: 'https://github.com/KarpovYuri/portfolio',
    description: 'Сайт портфолио.',
    functional: 'Сайт рассказывает обо мне и демонстрирует мои работы.',
    technologies: 'HTML, CSS, Nuxt, Vue, JavaScript, TypeScript'
  },
  {
    preview: arkanoidPreview,
    title: 'Arkanoid',
    demoLink: 'https://arkanoid-client.vercel.app/',
    codeLink: 'https://github.com/KarpovYuri/Arkanoid',
    description: 'Игра Арканоид.',
    functional:
      'В приложении реализована механика игры на Canvas API, регистрация, OAuth-авторизация, изменение пароля и аватара, таблица рейтинга, форум, темизация приложения, Server Side Rendering.',
    technologies:
      'HTML, SCSS, TypeScript, React, Redux Toolkit, Redux Thunk, Classnames, Node.js, Express.js, PostgreSQL, Sequelize, Service Workers, Jest, Vite, Docker'
  },
  {
    preview: chatPreview,
    title: 'Мессенджер',
    demoLink: 'https://amazing-syrniki-922dd2.netlify.app/',
    codeLink: 'https://github.com/KarpovYuri/middle.messenger.praktikum.yandex',
    description: 'Веб-приложение для обмена сообщениями.',
    functional:
      'В приложении реализован функционал регистрации, авторизации, обновления данных профиля, смена пароля, смена аватара, создание и удаление чата, добавление и удаление пользователей в чат, отправка и получение текстовых сообщений.',
    technologies:
      'HTML, SCSS, React, TypeScript, Express.js, Handlebars, Mocha, WebSocket, Webpack, Docker'
  },
  {
    preview: moviesReactPreview,
    title: 'Movies explorer',
    demoLink: 'https://movies.karaudio.ru/',
    codeLink: 'https://github.com/KarpovYuri/movies-explorer-frontend',
    description: 'Проект, позволяющий осуществлять поиск фильмов по базе.',
    functional:
      'Проект написан на React. Реализован функционал поиска фильмов по названию и длительности, сохранение и удаление фильмов, просмотр трейлера, регистрация / авторизация, редактирование профиля пользователя, живая валидация полей форм.',
    technologies:
      'HTML, CSS, React, JavaScript, BEM, Flexbox, Grid Layout, Adaptive, Responsive'
  },
  {
    preview: moviesApiPreview,
    title: 'Movies explorer Api',
    codeLink: 'https://github.com/KarpovYuri/movies-explorer-api',
    description:
      'Backend проекта Movies, позволяющий осуществлять поиск фильмов по базе.',
    functional:
      'В API реализован функционал регистрации / авторизации пользователя, обновления данных пользователя, получение информации о текущем пользователе, получение списка фильмов, сохранение / удаление фильмов, централизованная обработка ошибок, валидация входящих данных.',
    technologies: 'JavaScript, Node.js, Express.js, Mongoose, MongoDB'
  },
  {
    preview: runToLivePreview,
    title: 'Run to live',
    demoLink: 'https://movika.com/runtolive',
    description: 'Инновационный интерактивный фильм.',
    functional:
      'В процессе просмотра фильма предлагается пройти различные интерактивы. В зависимости от результата осуществляется переход к выигрышному или проигрышному варианту продолжения фильма.',
    technologies: 'HTML, CSS, JavaScript, Webpack'
  },
  {
    preview: mestoReactPreview,
    title: 'Mesto на React',
    demoLink: 'https://mesto-react.karaudio.ru/',
    codeLink:
      'https://github.com/KarpovYuri/react-mesto-api-full/tree/main/frontend',
    description: 'Проект, позволяющий добовлять фотографии интересных мест.',
    functional:
      'Проект написан на React. Реализован функционал редактирования профиля, добавления / удаления карточки, постановки / снятия лайка, открытия фотографии в полном размере.',
    technologies:
      'HTML, CSS, React, JavaScript, BEM, Flexbox, Grid Layout, Adaptive, Responsive'
  },
  {
    preview: mestoBackendPreview,
    title: 'Mesto Api',
    codeLink:
      'https://github.com/KarpovYuri/react-mesto-api-full/tree/main/backend',
    description:
      'Backend проекта Mesto, позволяющий добовлять фотографии интересных мест.',
    functional:
      'В API реализован функционал регистрации / авторизации пользователя, редактирования профиля, добавления / удаления карточки, постановки / снятия лайка.',
    technologies: 'JavaScript, Node.js, Express.js, Mongoose, MongoDB'
  },
  {
    preview: mestoPreview,
    title: 'Mesto на TypeScript',
    demoLink: 'https://mesto.karpov-dev.ru/',
    codeLink: 'https://github.com/KarpovYuri/mesto',
    description: 'Проект, позволяющий добовлять фотографии интересных мест.',
    functional:
      'Проект написан в ООП стиле. Реализован функционал редактирования профиля, добавления / удаления карточки, постановки / снятия лайка, открытия фотографии в полном размере.',
    technologies:
      'HTML, CSS, TypeScript, BEM, Flexbox, Grid Layout, Adaptive, Responsive, Webpack'
  },
  {
    preview: russianTravelPreview,
    title: 'Путешествия по России',
    demoLink: 'https://russian-travel.karpov-dev.ru/',
    codeLink: 'https://github.com/KarpovYuri/russian-travel',
    description:
      'Лендинг о путешествиях по России и интересных местах для отдыха.',
    functional:
      'В проекте реализованы различные подходы к позиционированию и выравниванию элементов, в том числе Flexbox и Grid Layout. Сайт адаптирован для просмотра на мобильных устройствах.',
    technologies: 'HTML, CSS, BEM, Flexbox, Grid Layout, Adaptive, Responsive'
  },
  {
    preview: uberPreview,
    title: 'Uber Partners',
    demoLink: 'https://uber.karpov-dev.ru/',
    codeLink: 'https://github.com/KarpovYuri/uber',
    description: 'Одностраничный сайт компании UBER PARTNERS',
    functional:
      'Сайт рассказывает водителям о преимуществах работы с данным таксопарком. Позволяет заказать обратный звонок и отправить заявку.',
    technologies: 'HTML, Sass, Bootstrap (сетка), Javascript, BEM, Awesome'
  },
  {
    preview: wordpressPreview,
    title: 'Wordpress интенсив',
    demoLink: 'https://wordpress.karpov-dev.ru/',
    codeLink: 'https://github.com/KarpovYuri/wordpress',
    description: 'Одностраничный сайт про Wordpress интенсив.',
    functional:
      'Сайт рассказывает о программе интенсива и ожидаемых навыках в результате его прохождения.',
    technologies: 'HTML, CSS, Javascript, BEM, Flexbox'
  },
  {
    preview: htlPreview,
    title: 'Научиться учиться',
    demoLink: 'https://how-to-learn.karpov-dev.ru/',
    codeLink: 'https://github.com/KarpovYuri/how-to-learn',
    description: 'Одностраничный сайт о методах и принципах обучения.',
    functional:
      'Сайт рассказывает о главных проблемах и техниках обучения, приводит статистику про учебу и мозг. Содержит описание практик, методов и принципов обучения.',
    technologies: 'HTML, CSS, BEM, Flexbox, YouTube Player API'
  },
  {
    preview: vrtPreview,
    title: 'Студия VRT',
    demoLink: 'https://www.vrtstudio.ru',
    description: 'Многостраничный сайт студии автозвука и тюнинга VRT',
    technologies: 'CMS Joomla, Virtuemart, HTML, CSS, Javascript, jQuery, PHP'
  },
  {
    preview: dinamikPreview,
    title: 'Студия Динамик',
    demoLink: 'https://dinamik.karpov-dev.ru/',
    description: 'Одностраничный сайт студии автозвука Динамик',
    technologies: 'HTML, CSS, Javascript, jQuery'
  }
];
