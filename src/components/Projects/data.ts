import dinamikPreview from '../../assets/img/projects/dinamik.png';
import vrtPreview from '../../assets/img/projects/vrtstudio.png';
import htlPreview from '../../assets/img/projects/htl.png';
import wordpressPreview from '../../assets/img/projects/wordpress.png';
import uberPreview from '../../assets/img/projects/uber.png';
import russianTravelPreview from '../../assets/img/projects/russian-travel.png';
import mestoPreview from '../../assets/img/projects/mesto.png';
import mestoBackendPreview from '../../assets/img/projects/Mesto-backend.png';
import mestoReactPreview from '../../assets/img/projects/Mesto-react-frontend.png';
import moviesReactPreview from '../../assets/img/projects/Movies.png';
import moviesApiPreview from '../../assets/img/projects/Movies-api.png';

export const projects = [
  {
    preview: moviesReactPreview,
    title: 'Movies explorer на React',
    codeLink: 'https://github.com/KarpovYuri/movies-explorer-frontend',
    description: 'Проект, позволяющий осуществлять поиск фильмов по базе.',
    functional:
      'Проект написан на React. Реализован функционал поиска фильмов по названию и длительности, сохранение и удаление фильмов, просмотр трейлера, регистрация / авторизация, редактирование профиля пользователя, живая валидация полей форм.',
    technologies: 'HTML, CSS, React, JavaScript, BEM, Flexbox, Grid Layout, Adaptive, Responsive'
  },
  {
    preview: moviesApiPreview,
    title: 'Movies explorer Api',
    codeLink: 'https://github.com/KarpovYuri/movies-explorer-api',
    description: 'Backend проекта Movies, позволяющий осуществлять поиск фильмов по базе.',
    functional:
      'В API реализован функционал регистрации / авторизации пользователя, обновления данных пользователя, получение информации о текущем пользователе, получение списка фильмов, сохранение / удаление фильмов, централизованная обработка ошибок, валидация входящих данных.',
    technologies: 'JavaScript, Node.js, Express.js, Mongoose, MongoDB'
  },
  {
    preview: mestoReactPreview,
    title: 'Mesto на React',
    demoLink: 'https://mesto-react.karaudio.ru/',
    codeLink: 'https://github.com/KarpovYuri/react-mesto-api-full/tree/main/frontend',
    description: 'Проект, позволяющий добовлять фотографии интересных мест.',
    functional:
      'Проект написан на React. Реализован функционал редактирования профиля, добавления / удаления карточки, постановки / снятия лайка, открытия фотографии в полном размере.',
    technologies: 'HTML, CSS, React, JavaScript, BEM, Flexbox, Grid Layout, Adaptive, Responsive'
  },
  {
    preview: mestoBackendPreview,
    title: 'Mesto Api',
    codeLink: 'https://github.com/KarpovYuri/react-mesto-api-full/tree/main/backend',
    description: 'Backend проекта Mesto, позволяющий добовлять фотографии интересных мест.',
    functional:
      'В API реализован функционал регистрации / авторизации пользователя, редактирования профиля, добавления / удаления карточки, постановки / снятия лайка.',
    technologies: 'JavaScript, Node.js, Express.js, Mongoose, MongoDB'
  },
  {
    preview: mestoPreview,
    title: 'Mesto на TypeScript',
    demoLink: 'https://mesto.karaudio.ru/',
    codeLink: 'https://github.com/KarpovYuri/mesto',
    description: 'Проект, позволяющий добовлять фотографии интересных мест.',
    functional:
      'Проект написан в ООП стиле. Реализован функционал редактирования профиля, добавления / удаления карточки, постановки / снятия лайка, открытия фотографии в полном размере.',
    technologies: 'HTML, CSS, TypeScript, BEM, Flexbox, Grid Layout, Adaptive, Responsive, Webpack'
  },
  {
    preview: russianTravelPreview,
    title: 'Путешествия по России',
    demoLink: 'https://russian-travel.karaudio.ru/',
    codeLink: 'https://github.com/KarpovYuri/russian-travel',
    description: 'Лендинг о путешествиях по России и интересных местах для отдыха.',
    functional:
      'В проекте реализованы различные подходы к позиционированию и выравниванию элементов, в том числе Flexbox и Grid Layout. Сайт адаптирован для просмотра на мобильных устройствах.',
    technologies: 'HTML, CSS, BEM, Flexbox, Grid Layout, Adaptive, Responsive'
  },
  {
    preview: uberPreview,
    title: 'Uber Partners',
    demoLink: 'https://uber.karaudio.ru/',
    codeLink: 'https://github.com/KarpovYuri/uber',
    description: 'Одностраничный сайт компании UBER PARTNERS',
    functional:
      'Сайт рассказывает водителям о преимуществах работы с данным таксопарком. Позволяет заказать обратный звонок и отправить заявку.',
    technologies: 'HTML, Sass, Bootstrap (сетка), Javascript, BEM, Awesome'
  },
  {
    preview: wordpressPreview,
    title: 'Wordpress интенсив',
    demoLink: 'https://wordpress.karaudio.ru/',
    codeLink: 'https://github.com/KarpovYuri/wordpress',
    description: 'Одностраничный сайт про Wordpress интенсив.',
    functional:
      'Сайт рассказывает о программе интенсива и ожидаемых навыках в результате его прохождения.',
    technologies: 'HTML, CSS, Javascript, BEM, Flexbox'
  },
  {
    preview: htlPreview,
    title: 'Научиться учиться',
    demoLink: 'https://how-to-learn.karaudio.ru/',
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
    demoLink: 'https://dinamik.karaudio.ru/',
    description: 'Одностраничный сайт студии автозвука Динамик',
    technologies: 'HTML, CSS, Javascript, jQuery'
  }
];
