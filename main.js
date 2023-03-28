







const blocks = document.querySelectorAll(".page-three_block_text_hover");
const blockImgs = document.querySelectorAll(".blockimg");
let lastDisplayedImg = null;

blocks.forEach((block) => {
  const blockImgId = block.dataset.img;
  const blockImg = document.getElementById(blockImgId);
  
  block.addEventListener("mouseover", () => {
    blockImgs.forEach((img) => {
      img.style.display = "none";
    });
    blockImg.style.display = "inline-block";
    lastDisplayedImg = blockImg;
  });

  block.addEventListener("mouseout", () => {
    blockImgs.forEach((img) => {
      if (img !== lastDisplayedImg) {
        img.style.display = "none";
      }
    });
  });
});



















let offset = 0; 
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.next').addEventListener('click', function(){
  offset = offset + 243;
  sliderLine.style.left = -offset + 'px';

  if (offset > 972) {
    offset = 0;
    sliderLine.style.left = 0;
  }

});




document.querySelector('.prev').addEventListener('click', function() {
  offset -= 243;
  if (offset < 0) {
    offset = 972; // устанавливаем значение, соответствующее последнему слайду
    sliderLine.style.left = -offset + 'px';
  } else {
    sliderLine.style.left = -offset + 'px';
  }
});






$(document).ready(function() {
  // Массив с пятью текстовыми строками
  var texts = [
    "Aistein Bullet Camera",
    "Aistein PTZ Dome Camera",
    "Aistein Dome Camera",
    "Aistein BRIDGE",
    "Aistein RADAR"
  ];

  // Находим элементы на странице
  var block = $('#my-block');
  var prevButton = $('.prev');
  var nextButton = $('.next');

  // Счетчик текущего текста в массиве
  var currentIndex = 0;

  // Меняем текст в блоке на первый элемент массива
  block.text(texts[currentIndex]);

  // Привязываем обработчик события нажатия на кнопку "Назад"
  prevButton.click(function() {
    // Выбираем предыдущий элемент массива
    var prevIndex = (currentIndex - 1 + texts.length) % texts.length;
    var prevText = texts[prevIndex];

    // Меняем текст в блоке
    block.text(prevText);

    // Обновляем счетчик текущего текста
    currentIndex = prevIndex;
  });

  // Привязываем обработчик события нажатия на кнопку "Вперед"
  nextButton.click(function() {
    // Выбираем следующий элемент массива
    var nextIndex = (currentIndex + 1) % texts.length;
    var nextText = texts[nextIndex];

    // Меняем текст в блоке
    block.text(nextText);

    // Обновляем счетчик текущего текста
    currentIndex = nextIndex;
  });
});




