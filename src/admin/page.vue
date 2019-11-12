<template lang="pug">
  .admin-template
    header.header
      .container.header__container
        .header__info
          .header__user
            .header__photo
              img(src='../images/content/me.jpeg').header__photo-pic
            .header__name Вадим Монастырский
          .header__title Панель администрирования
        .header__btns
          button.header__btn-exit Выйти
    //- табы 
    nav.tabs
      .container.tabs__container 
        ul.tabs__list
          li.tabs__item.tabs__item--active 
            a.tabs__link Обо мне 
          li.tabs__item
            a.tabs__link Работы
          li.tabs__item
            a.tabs__link Отзывы
    //- страница
    .content
      //- section about
      .about-section
        .container
          .about-page__container
            h1.about-page__title Блок &#171Обо мне&#187
            button.about-page__add-new Добавить группу
        .about-page__content
          .container
            ul.skill-list
              li.skill-list__item
                .skill-container
                  .skill-container__title
                    h2.skill__title Frontend
                    button(type="button").edit-btn
                  hr
                  table.skill-table
                    tr.skill-table__row
                      td.skill-table__name Git
                      td.skill-table__percent 100 %
                      td.skill-table__btns 
                        button(type="button").edit-btn
                        button(type="button").remove-btn
                    tr.skill-table__row
                      td.skill-table__name Terminal
                      td.skill-table__percent 90 %
                      td.skill-table__btns 
                        button(type="button").edit-btn
                        button(type="button").remove-btn
                    tr.skill-table__row
                      td.skill-table__name Gulp
                      td.skill-table__percent 80 %
                      td.skill-table__btns 
                        button(type="button").edit-btn
                        button(type="button").remove-btn
                    tr.skill-table__row
                      td.skill-table__name Html
                      td.skill-table__percent 50 %
                      td.skill-table__btns 
                        button(type="button").edit-btn
                        button(type="button").remove-btn

                form.add-skill-wrapper.skill-container
                  input(type="text" placeholder="Новый навык").add-skill__name
                  input(type="text" placeholder="100 %").add-skill__percent
                  button(type="submit").add-skill__btn--active +

              li.skill-list__item
                .skill-container
                  form(@submit.prevent="addNewCategory").add-skill-form
                    input(type="text" v-model="title" placeholder="Название новой группы").add-skill-name 
                    button(type="submit").save-btn
                    button(type="submit").delete-btn
                  hr
                  

                form.add-skill-wrapper.skill-container
                  input(type="text" placeholder="Новый навык").add-skill__name
                  input(type="text" placeholder="100 %").add-skill__percent
                  button(type="submit").add-skill__btn +
      //- section отзывы
      .reviews-section
        .container
          h1.reviews-page__title Блок &#171Отзывы&#187
        .reviews-container 
          .card.container
            .card__container
              .card__title
                .card__title-text Добавить отзыв
                hr
              .card__content
                form.reviews__form
                  .reviews__form-content 
                    .reviews__form-userpic
                      label.reviews__form-avatar-upload
                        .reviews__form-avatar-pic
                        input(type='file').reviews__form-file-input
                        .reviews__form-file-text  Добавить фото
                    .reviews__form-data
                      .reviews__form-row
                        label.reviews__form-label 
                          .reviews__form-title Имя автора
                          input(type='text' placeholder='Дмитрий Ковальчук').reviews__form-text-input
                        label.reviews__form-label
                          .reviews__form-title Титул автора
                          input(type='text' placeholder='Основатель школы').reviews__form-text-input
                      .reviews__form-row
                        label.reviews__form-textarea
                          .reviews__form-title Отзыв
                          textarea(type='text' placeholder="Этот парень проходил...").reviews__form-textarea-field 
                      .edit-form__buttons
                        .edit-form__buttons-item
                            button(type='button').edit-form__stop-btn Отмена
                        .edit-form__buttons-item
                            button(type='sybmit').edit-form__send-btn Сохранить
          .reviews-items.container
            ul.reviews__list
              li.review__item.review__item--new
                .review__item-add 
                  .review__item-add-plus +
                .review__item-text Добавить отзыв
              li.review__item 
                .review__item__container
                  .review__item-info
                    .review__item-user
                      .review__item-user-photo
                        img(src='../images/content/me.jpeg').review__item-user-pic
                      .review__item-user-text
                        .review__item-name Владимир Сабанцев
                        .review__item-post Преподаватель
                  hr
                  .review__item-desc
                    p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах.
                  .review__item-btns
                    label.review__item-label
                      .review__item-label-text Править
                      button(type="button").edit-btn
                    label.review__item-label
                      .review__item-label-text Удалить
                      button(type="button").delete-btn
              li.review__item 
                .review__item__container
                  .review__item-info
                    .review__item-user
                      .review__item-user-photo
                        img(src='../images/content/me.jpeg').review__item-user-pic
                      .review__item-user-text
                        .review__item-name Владимир Сабанцев
                        .review__item-post Преподаватель
                  hr
                  .review__item-desc
                    p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах.
                  .review__item-btns
                    label.review__item-label
                      .review__item-label-text Править
                      button(type="button").edit-btn
                    label.review__item-label
                      .review__item-label-text Удалить
                      button(type="button").delete-btn
      //- блок работы
      .works-section
        .container
          h1.work-page__title Блок &#171Работы&#187
        .works-container 
          .work.container
            .work__container
              .container
                .work__title
                  .work__title-text Редактирование работы
                  hr
                .work__content
                  form.work__form
                    .work__form-content 
                      .work__form-userpic
                        label.work__form-avatar-upload
                          .work__form-avatar-pic
                            input(type='file').reviews__form-file-input
                            .work__form-file-text  Добавить фото для загрузки изображения
                            button(type='sybmit').work-form__send-btn Отправить
                      .work__form-data
                        .work__form-row
                          label.work__form-label 
                            .work__form-title Название
                            input(type='text' placeholder='Дизайн сайта поисковика').work__form-text-input
                        .work__form-row
                          label.work__form-label
                            .work__form-title Ссылка
                            input(type='text' placeholder='https://www.ya.ru').work__form-text-input
                        .work__form-row
                          label.work__form-textarea
                            .work__form-title Описание
                            textarea(type='text' placeholder="Поиск по интернету с учётом региона пользователя. Возможность искать по картинкам, видео, картам, новостям, блогам, товарам и словарям.").work__form-textarea-field 
                        .work__form-row
                          label.work__form-label
                            .work__form-title Добавление тэга
                            input(type='text' placeholder='Html, JavaScript, CSS').work__form-text-input
                        .edit-form__buttons
                          .edit-form__buttons-item
                              button(type='button').edit-form__stop-btn Отмена
                          .edit-form__buttons-item
                              button(type='sybmit').edit-form__send-btn Сохранить
          .work-items.container
            ul.work__list
              li.work__item.work__item--new
                .work__item-add 
                  .work__item-add-plus +
                .work__item-text Добавить работу
              li.work__item 
                .work__item-preview
                  img(src='../images/content/work/1.jpg').work__item-pic
                .work__item__container
                  h3.work__item-title Сайт школы образования
                  .work__item-desc
                    p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах.
                  a(href="https://loftschool.com/" target='_blank').work__item-link loftschool.ru
                  .work__item-btns
                    label.work__item-label
                      .work__item-label-text Править
                      button(type="button").edit-btn
                    label.work__item-label
                      .work__item-label-text Удалить
                      button(type="button").delete-btn
              li.work__item 
                .work__item-preview
                  img(src='../images/content/work/4.jpg').work__item-pic
                .work__item__container
                  h3.work__item-title Сайт школы образования
                  .work__item-desc
                    p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах.
                  a(href="https://loftschool.com/" target='_blank').work__item-link loftschool.ru
                  .work__item-btns
                    label.work__item-label
                      .work__item-label-text Править
                      button(type="button").edit-btn
                    label.work__item-label
                      .work__item-label-text Удалить
                      button(type="button").delete-btn
</template>

<script>
import page from './page';
import login from './login';

export default {
  name: 'app',
  components: {
    page, login
  },
}
</script>


<style lang="postcss" scoped>
  @import 'normalize.css';
  @import '../styles/mixins.pcss';
  @import '../styles/layout/base.pcss';
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

  .admin-template {
    font-family: "Open Sans";
    font-weight: 600; 
  }


  // начало хедера


  .header {
    height: 80px;
    background-image: linear-gradient(90deg, #3d3d59 0%, #444472 100%);
  }

  .header__container {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .header__info {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    max-width: 560px;
  }

  .header__user {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .header__title {
    font-size: 14px;
    line-height: 34px;
    color: #ffffff;
    font-family: "Open Sans";
    font-weight: 400;
    opacity: 0.5;
  }

  .header__photo {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;
  }

  .header__name {
    font-size: 18px;
    line-height: 34px;
    color: #ffffff;
    font-family: "Open Sans";
    font-weight: 600;
    margin-left: 20px;
  }

  .header__btns {
    display: flex;
    align-items: center;
  }

  .header__btn-exit {
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    font-family: "Open Sans";
    font-weight: 400;
    opacity: 0.7;
    background: transparent;
    text-decoration: underline;

    &:hover {
      opacity: 1;
    }
  }


  // конец хедера


  // начало табов 
  

  .tabs__list {
    display: flex;
  }

  .tabs__item {
    width: 130px;
    display: flex;
    justify-content: center;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 400;
    text-align: center;

    &:hover {
      color: #383bcf;
      border-bottom: 4px solid #383bcf
    }
  }

  .tabs__item--active {
    color: #383bcf;
    border-bottom: 4px solid #383bcf
  } 

  .tabs__link {
    padding: 30px 0;
    font-size: 16px;
    line-height: 36px;
  }


  // конец табов

  // начало админки 

  .content {
    background-color: #f8f9fe;
    padding-top: 60px;
  }

  .about-section {
    margin-bottom: 60px;
  }

  .about-page__title {
    font-size: 21px;
    line-height: 34px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 700;
  }


  // начала секции обо мне 

  .about-page__container {
    display: flex;
    margin-bottom: 60px;
  }

  .about-page__add-new {
    background-color: transparent;
    font-size: 16px;
    line-height: 34px;
    color: #383bcf;
    font-family: "Open Sans";
    font-weight: 600;
    margin-left: 60px;
    padding: 0;
    position: relative;


    &::before {
      content: '+';
      height: 22px;
      width: 22px;
      background-color: #383bcf;
      position: absolute;
      top: 5px;
      left: -30px;
      font-size: 15px;
      line-height: 22px;
      color: #ffffff;
      font-family: "Open Sans";
      font-weight: 600;
      border-radius: 50%;
    }
  }

  .skill-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
  }

  .skill-list__item {
    width: 49%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    padding-bottom: 35px;
  }

  .skill-container {
    width: 95%;
    margin: 0 auto;
  }

  .skill-container__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }


  .skill__title {
    font-size: 18px;
    line-height: 34px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
    color: #414c63;
    padding: 25px 0;
  }

  .skill-table {
    margin-top: 30px;
    font-size: 16px;
    line-height: 32px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 400;
    width: 100%;
  }

  .skill-table__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .skill-table__name {
    width: 60%;
  }

  .skill-table__percent{
    width: 10%;
  }

  .skill-table__{
    width: 10%;
  }

  .add-skill-wrapper {
    margin-top: 75px;
    display: flex;
    justify-content: flex-end;
  }

  .add-skill__btn {
    text-align: center;
    font-size: 30px;
    line-height: 30px;
    color: #ffffff;
    font-family: "Open Sans";
    font-weight: 600;
    background-color: #a0a5b1;
    border-radius: 50%;
    padding: 5px 11px;
    margin-left: 35px;
  }

  .add-skill__btn--active {
    text-align: center;
    font-size: 30px;
    line-height: 30px;
    color: #ffffff;
    font-family: "Open Sans";
    font-weight: 600;
    background-color: #383bcf;
    border-radius: 50%;
    padding: 5px 11px;
    margin-left: 35px;
  }

  .add-skill-form {
    padding: 14px 0;
  }

  .add-skill__name {
    font-size: 16px;
    color: #373e42;
    font-family: "Open Sans";
    font-weight: 400;
    border: transparent;
    border-bottom: 1px solid #1f232d;
    padding: 9px 9px;
    max-width: 220px;
  }

  .add-skill__percent {
    font-size: 16px;
    color: #373e42;
    font-family: "Open Sans";
    font-weight: 400;
    border: transparent;
    border-bottom: 1px solid #1f232d;
    padding: 9px 9px;
    width: 75px;
    margin-left: 35px;
  }


  .add-skill-name {
    font-size: 18px;
    line-height: 34px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
    opacity: 0.5;
    border: 0;
    border: transparent;
    border-bottom: 1px solid #1f232d;
    padding: 10px 10px;
  }


  // конец секции обо мне


  // начало секции мои работы
  .reviews-section {
    margin-bottom: 60px;
  }
  .reviews-page__title {
    font-size: 21px;
    line-height: 34px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 700;
    margin-bottom: 60px;
  }

  .card {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    padding-bottom: 50px;
  }

  .card__title-text {
    font-size: 18px;
    line-height: 34px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
    color: #414c63;
    padding: 25px 0;
  
  }

  .card__container {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }


  .reviews__form-content  {
    display: flex;
    margin-top: 45px;
  }

  .reviews__form-avatar-upload{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .reviews__form-avatar-pic {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: #dee4ed;
  }

  .reviews__form-file-input {
    position: absolute;
    top: 0;
    left: -9999px;
  }

  .reviews__form-data {
    width: 65%;
    margin-left: 35px;
  }

  .reviews__form-file-text {
    font-size: 16px;
    line-height: 34px;
    color: #383bcf;
    font-family: "Open Sans";
    font-weight: 600;
    margin-top: 25px;
  }

  .reviews__form-row {
    display: flex;
    width: 100%;
    justify-content: space-between
  }

  .reviews__form-label {
    width: 49%;
  }

  .reviews__form-text-input {
    width: 100%;
    border: transparent;
    border-bottom: 1px solid #1f232d;
    padding: 15px 9px;
    font-size: 16px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
  }

  .reviews__form-title {
    font-size: 16px;
    line-height: 30px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
    opacity: 0.5;
  }

  .reviews__form-textarea {
    margin-top: 40px;
    width: 100%;
  }

  .reviews__form-textarea-field {
    width: 100%;
    height: 120px;
    resize: none;
    font-size: 16px;
    line-height: 30px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
    padding: 9px 9px;
  }

  .reviews-items {
    margin-top: 30px;
  }

  .reviews__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .review__item--new {
    width: 32%;
    height: 380px;
    background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  }

  .review__item {
    width: 32%;
    height: 380px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }

  .review__item__container {
    height: 100%;
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    
  }

  .review__item-add {
    width: 150px;
    height: 150px;
    background-color: transparent;
    border: 2px solid #ffffff;
    border-radius: 50%;
    font-size: 72px;
    line-height: 30px;
    color: #ffffff;
    font-family: "Open Sans";
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 95px auto 0 auto;
  }

  .review__item-text {
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
    font-family: "Open Sans";
    font-weight: 700;
    text-align: center;
    margin-top: 30px;
  }

  .review__item-info {
    display: flex;
    margin-top: 25px;
  }

  .review__item-user {
    display: flex;
    width: 100%;
  }

  .review__item-user-photo {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    overflow: hidden;
  }

  .review__item-user-text {
    margin-left: 25px;
    padding-bottom: 25px; 
  }

  .review__item-name{
    font-size: 18px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 700;
  }

  .review__item-post {
    font-size: 16px;
    opacity: 0.5;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
    
  }
    
  .review__item-btns {
    margin-top: 65px;
    display: flex;
    justify-content: space-between;
  }

  .review__item-desc {
    font-size: 16px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
    line-height: 30px;
    opacity: 0.7;
    padding: 20px 10px;
  }

  .review__item-label {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 30px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
  }


  .review__item-label-text {
    opacity: 0.5;
  }


  // конец секции отзывы


  .work-page__title {
    font-size: 21px;
    line-height: 34px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 700;
    margin-bottom: 60px;
  }

  // начало секции работы 

  .work__container {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    padding-bottom: 50px;
  }

  .work__title-text {
    font-size: 18px;
    line-height: 34px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
    color: #414c63;
    padding: 25px 0;
  }

  .work__form-content  {
    margin-top: 45px;
    display: flex;
  }

  .work__form-userpic {
    width: 50%;
  }

  .work__form-avatar-pic {
    width: 100%;
    height: 280px;
    background-color: #dee4ed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #dee4ed;
    border: 1px dashed #a1a1a1;
  }

  .work__form-file-text {
    max-width: 220px;
    font-size: 16px;
    line-height: 34px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
    text-align: center;
  }

  .work-form__send-btn {
    margin-top: 25px;
    font-size: 16px;
    text-transform: uppercase;
    color: #ffffff;
    font-family: "Open Sans";
    font-weight: 700;
    padding: 15px 30px;
    border-radius: 25px;
    background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  }

  .work__form-data {
    width: 45%;
    margin-left: 35px;
  }

  .work__form-row {
    display: flex;
    width: 100%;
    justify-content: space-between
  }

  .work__form-label  {
    width: 100%;
    margin-bottom: 10px;
  }

  .work__form-textarea {
    width: 100%;
    margin-bottom: 10px;

  }

  .work__form-text-input {
    width: 100%;
    border: transparent;
    border-bottom: 1px solid #1f232d;
    padding: 15px 9px;
    font-size: 16px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
  }

  .work__form-title {
    font-size: 16px;
    line-height: 30px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
    opacity: 0.5;
  }


  .work__form-textarea-field {
    width: 100%;
    height: 120px;
    resize: none;
    font-size: 16px;
    line-height: 30px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
    padding: 9px 9px;
  }

  .work-items {
    margin-top: 30px;
  }

  .work__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .work__item--new {
    width: 32%;
    height: 580px;
    background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  }

  .work__item {
    width: 32%;
    height: 580px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }

  .work__item__container {
    height: 100%;
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: #414c63;
    font-family: "Open Sans";
    
  }

  .work__item-pic {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .work__item-add {
    width: 150px;
    height: 150px;
    background-color: transparent;
    border: 2px solid #ffffff;
    border-radius: 50%;
    font-size: 72px;
    line-height: 30px;
    color: #ffffff;
    font-family: "Open Sans";
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 190px auto 0 auto;
  }

  .work__item-text {
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
    font-weight: 700;
    text-align: center;
    margin-top: 30px;
  }

  .work__item-title {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 700;
  }

  .work__item-desc {
    margin-top: 20px;
    flex: 1;
    font-size: 16px;
    line-height: 30px;
    font-weight: 600;
    opacity: 0.7;
  }

  .work__item-link {
    margin-top: 20px;
    font-size: 16px;
    color: #383bcf;
    cursor: pointer;
    font-weight: 600;
    padding-bottom: 25px;
  }

  .work__item-btns {
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
  }
    



  // btns-css

  .edit-btn {
    margin: 0 8px;
    height: 16px;
    width: 16px;
    background: svg-load('pencil.svg', fill=#a0a5b1, width=100%, height=100%);
    background-repeat: no-repeat;
  }

  .remove-btn {
    margin: 0 8px;
    height: 16px;
    width: 15px;
    background: svg-load('trash.svg', fill=#a0a5b1, width=100%, height=100%);
    background-repeat: no-repeat;
  }


  .save-btn {
    margin: 0 8px;
    height: 12px;
    width: 12px;
    background: svg-load('tick.svg', fill=#00d70a, width=100%, height=100%);
    background-repeat: no-repeat;
  }

  .delete-btn {
    margin: 0 8px;
    height: 12px;
    width: 12px;
    background: svg-load('remove.svg', fill=#bf2929, width=100%, height=100%);
    background-repeat: no-repeat;
  }

  .edit-form__send-btn {
    margin-left: 45px;
    font-size: 16px;
    text-transform: uppercase;
    color: #ffffff;
    font-family: "Open Sans";
    font-weight: 700;
    padding: 15px 30px;
    border-radius: 25px;
    background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  }
  
  .edit-form__stop-btn {
    font-size: 16px;
    line-height: 34px;
    color: #383bcf;
    font-family: "Open Sans";
    font-weight: 600;
  }

  .work__item-label {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 30px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
  }


  .work__item-label-text {
    opacity: 0.5;
  }

  // base 

  hr {
    margin: 0;
    opacity: 0.5;
  }

  button {
    margin: 0;
    padding: 0;
  }


  .edit-form__buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 25px;
  }
</style>