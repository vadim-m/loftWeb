import Vue from 'vue';
import Flickity from 'vue-flickity';

new Vue({
  el: '#reviews-component',
  template: '#reviews-slider',
  data: () =>({
    reviews: [],
    flickityOptions: {
      initialIndex: 0,
      prevNextButtons: false,
      pageDots: true,
      wrapAround: false,
      cellAlign: 'left',
      contain: true,
    }
  }),
  components: {
    Flickity
  },

  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    },
    
    makeArrWithRequiredImages(data){
      return data.map (item => {       // проходимся методом мэп по массиву аргумента
        const requiredPic = require(`../images/content/reviews/${item.photo}`); // делаем реквайр картинки
        item.photo = requiredPic; // меняем поле фото на новое значение
      
        return item // вернули айтем уже с новым полем
      })
    },
  },
  
  created(){
    const data = require('../data/reviews.json'); // получаем данные из статичного файла JSON, обычно данные берут с сервера(тут в учебных целяц)
    this.reviews = this.makeArrWithRequiredImages(data); // передаем в наш метод массиив Дата
  }
})