<template lang="pug">
  .login__wrapper
    .login
      form(@submit.prevent="login").login-form
        h1.login__title Авторизация
        label.login__row 
          span Логин
          .login__error {{ validation.firstError('user.name') }}
          .login__input-wrapper
            .login__input-pic.login__input-pic--key
            input(type='text' v-model="user.name").login__input
        label.login__row 
          span Пароль
          .login__error {{ validation.firstError('user.password') }}
          .login__input-wrapper
            .login__input-pic.login__input-pic--user
            input(type="password" v-model="user.password").login__input
        button(type='submit').login__btn Отправить
</template>


<script>
  import axios from "axios";
  import { Validator } from 'simple-vue-validator';

  const baseUrl = 'https://webdev-api.loftschool.com';
  const tokem = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIzMywiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1NzM1MDEzMDgsImV4cCI6MTU3MzUxOTMwOCwibmJmIjoxNTczNTAxMzA4LCJqdGkiOiJDTmRkbndweXBLQTl1blRFIn0.VmkYTv6Z0p0vnakw8-qvyaGKdpIckDz_AEcgaV_P6yM"


  export default {
    mixins: [require('simple-vue-validator').mixin],
    validators: {
      'user.name'(value) {
        return Validator.value(value).required('Введите Ваш логин');
      },
      'user.password'(value) {
        return Validator.value(value).required('Введите Ваш пароль');
      }
    },
    data: () => ({
      user: {
        name: '',
        password: ''
      }
    }),
    methods: {
      async login() {
        if ((await this.$validate()) == false) return;

        try {
          axios.post(baseUrl + "/login" , this.user)
          .then(response => {
          this.$router.replace("/pages")
          })

        } catch (error) {
          console.log(error);
        }
      
      }
    }
  }


  // methods: {
  //   login() {
  //     axios.post(baseUrl + "/login" , this.user).then(response => {
  //       console.log(response);
  //     })
</script>


<style lang="postcss" scoped>

  .login__wrapper {
    height: 100vh;
    width: 100%;
    background-color: #3e4c5e;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    max-width: 560px;
    max-height: 580px;
    border-radius: 5px;
  }

  .login-form {
    padding: 60px 60px;
    display: flex;
    flex-direction: column;
  }

  .login__title {
    margin: 0;
    font-size: 36px;
    color: #2d3c4e;
    font-family: "Open Sans";
    font-weight: 600;
    text-align: center;
  }

  .login__row {
    margin-top: 30px;
    width: 380px;
    border-bottom: 1px solid black;
    font-size: 16px;
    line-height: 30px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 600;
    position: relative;
    
    span {
      opacity: 0.3;
      margin-left: 42px;
    }
  }

  .login__error {
    position: absolute;
    top: 104%;
    left: 42px;
    line-height: 25px;
    background-color: #ad3434;
    padding: 0 15px;
    font-size: 13px;
    color: #FFF;
    font-family: "Open Sans";
    font-weight: 600;
    border-radius: 4px;
  }

  .login__input-wrapper {
    margin-top: 15px;
    display: flex;
    padding-bottom: 10px;
  }

  .login__input {
    margin-left: 15px;
    width: 100%;
    font-size: 18px;
    color: #414c63;
    font-family: "Open Sans";
    font-weight: 700;
    border: 0;
  }

  .login__input-pic {
    height: 30px;
    width: 27px;
    opacity: 0.3;
  }

  .login__input-pic--key {
    background: svg-load('key.svg', fill=#414c63, width=100%, height=100%);
    background-repeat: no-repeat;
  }
  
  .login__input-pic--user {
    background: svg-load('user.svg', fill=#414c63, width=100%, height=100%);
    background-repeat: no-repeat;
  }

  .login__btn {
    max-width: 345px;
    margin: 35px auto 0 auto;
    padding: 30px 120px;
    background: linear-gradient(90deg,#9100ef,#5500f2);
    font-size: 18px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    cursor: pointer;

    &:hover {
      color: #f29400;
      text-decoration: underline;
    }
  }

</style>