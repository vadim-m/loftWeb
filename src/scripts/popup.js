// tablets and phones menu

var triggerBtn = document.querySelector('.popup-btn'); // достал кнопку по селектору класса
var header = document.querySelector('.header'); // хедер по селектору класса
triggerBtn.onclick = function(e){  // обработчик события
  console.log(triggerBtn.className);
  console.log(header.className);
  e.preventDefault();
  if (header.className == 'header') {
    header.className = 'header--active';
    // document.body.style.overflow = 'hidden';
  } else {
    header.className = "header";
    // document.body.style.overflow = 'auto';
  }
}