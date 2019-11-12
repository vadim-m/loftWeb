const parallax = document.querySelector('.parallax'); // константа по селектору
const layers = parallax.children; // все потомки класса паралкс (лейр)

// функция для создания эффекта
function moveLayersDependsOnScroll(wScroll,pageWidth) {


  if (wScroll < 1450 && pageWidth > 768) {
    // console.log(wScroll,pageWidth);
    // перебор всех слоев в фкнкции
    Array.from(layers).forEach(layer => {
  
    // получаем значение data-set из Html, которое отвечает за "скорость"
    // прокрутки элемента, чем оно ниже тем медленнее движется эл-т.
    const diveder = layer.dataset.speed;
    //рассчитаем величину смещения
    const strafe = wScroll * diveder;

    // перемещние в противополжную сторону при моиощи tramsform: translateY

    layer.style.transform = `translateY(-${strafe}%)`;
  
    })
  }
}


// обработчик события на скролл страницы 
window.addEventListener('scroll', e => {
  const pageWidth = window.innerWidth; // ширина экрана, чтобы отключить параллакс при разрешениях < 768
  const wScroll = window.pageYOffset; // положение скролла 
  moveLayersDependsOnScroll(wScroll,pageWidth); // передали в функцию наше значение
  // console.log(wScroll);
})


