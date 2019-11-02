import Vue from 'vue';

// регистрируем компонент кнопки
const thumbs = {
  template: '#works-thumbs',
  props: ["works","currentWork"],   // регистрация пропсов, которые передаются от родителей
  computed: {
    reversedWorks(){ // создали метод, чтобы поменять превью местами. Первый эл-т снизу
      return [...this.works].reverse(); // точки перед воркс значат, что мы копируем ??? массив воркс, а потом его реверсаем
    }
  }
  
}

// регистрируем компонент 
const btns = {
  template: '#works-btns'
}

// регистрируем компонент 
const tags = {
  template: '#works-tags',
  props: ['tags'],
}

// регистрируем компонент. Левая часть сам виджет 
const display = {
  template: '#works-display',
  components: {thumbs, btns},
  props: ["works","currentWork", "currentIndex" ] // регистрация пропсов, которые передаются от родителей
}

// регистрируем компонент. Правая часть с тегами и текстом 
const info = {
  template: '#works-info',
  components: {tags},
  props: ["currentWork"], // регистрация пропсов, которые передаются от родителей
  
  computed: {             // компутед св-во, которое на основе той строки, которая есть в объекте 
    tagsArray() {         // currentWork будет создавать массив из строки
      return this.currentWork.skills.split(', '); // при помощи сплит и разделителю "," разбиваем строку и делаем ее массивом
    } 
  }
}

new Vue({                    // создали корневой компонент
  el: '#slider-component',
  template: '#works-container',
  components: {display, info}, //подключаем используемые компоненты
  
  data: () => ({ // указываем, что в компоненте будут данные, в данном случае
    works: [],   // массив works
    currentIndex: 0, // индекс октрытой превьюхи. При нажатиии на кнопки будем его + или -  
  
  }),
  computed: {  // computed - это такое же свойство как в объекте дата, только оно каждый раз пересчитвается,
              // когда меняется его зависимость(this....), т. е. в дату его не нужно писать
    currentWork(){ 
      return this.works[this.currentIndex]
    }
  },
  watch: {                  // вотчер для отслеживания, чтобы номер слайда не был больше кол-ва превьюх
    currentIndex(value) {   // или меньше нуля. Короче закольцовка
      const worksAmount = this.works.length - 1;
      if (value < 0) this.currentIndex = worksAmount;
      if (value > worksAmount) this.currentIndex = 0;
    }
  },
  methods: {
    // создаем метод, чтобы "зареквайрить" картинки, делаем это в рамках учебного! проекта, т.к. файлы локальные
    makeArrWithRequiredImages(data){
      return data.map (item => {       // проходимся методом мэп по массиву аргумента
        const requiredPic = require(`../images/content/work/${item.photo}`); // делаем реквайр картинки
        item.photo = requiredPic; // меняем поле фото на новое значение
      
        return item // вернули айтем уже с новым полем
      })
    },
    // метод для увеличения или уменьшения номера слайдв в зависимости от клика на кнопки
    handleSlide(direction) {  
      switch(direction) {
        case 'next':
          this.currentIndex++;
        break;
        
        case 'prev':
          this.currentIndex--;
        break;
      }
    }
  }, 
  created() { // хук жизненного цикла - на данном этапе(хуке) компонент уже рабочий и реактивный, но в дом дереве его еще нет
   
    const data = require('../data/works.json'); // получаем данные из статичного файла JSON, обычно данные берут с сервера(тут в учебных целяц)
    this.works = this.makeArrWithRequiredImages(data); // передаем в наш метод массиив Дата
  }
})