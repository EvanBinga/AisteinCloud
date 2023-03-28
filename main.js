/*
const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");
const block4 = document.getElementById("block4");
const block5 = document.getElementById("block5");
const block6 = document.getElementById("block6");
const block7 = document.getElementById("block7");
const block8 = document.getElementById("block8");

const blockimg1 = document.getElementById("blockimg1");
const blockimg2 = document.getElementById("blockimg2");
const blockimg3 = document.getElementById("blockimg3");
const blockimg4 = document.getElementById("blockimg4");
const blockimg5 = document.getElementById("blockimg5");
const blockimg6 = document.getElementById("blockimg6");
const blockimg7 = document.getElementById("blockimg7");
const blockimg8 = document.getElementById("blockimg8");

block1.addEventListener("mouseover", () => {
  blockimg1.style.display = "inline-block";
});
block1.addEventListener("mouseout", () => {
  blockimg1.style.display = "inline-block";
  blockimg2.style.display = "none";
});


block2.addEventListener("mouseover", () => {
  blockimg1.style.display = "none";
  blockimg2.style.display = "inline-block";
});
block2.addEventListener("mouseout", () => {
  blockimg1.style.display = "inline-block";
  blockimg2.style.display = "none";
});



block3.addEventListener("mouseover", () => {
  blockimg1.style.display = "none";
  blockimg3.style.display = "inline-block";
});
block3.addEventListener("mouseout", () => {
  blockimg1.style.display = "inline-block";
  blockimg3.style.display = "none";
});


block4.addEventListener("mouseover", () => {
  blockimg1.style.display = "none";
  blockimg4.style.display = "inline-block";
});
block4.addEventListener("mouseout", () => {
  blockimg1.style.display = "inline-block";
  blockimg4.style.display = "none";
});

block5.addEventListener("mouseover", () => {
  blockimg1.style.display = "none";
  blockimg5.style.display = "inline-block";
});
block5.addEventListener("mouseout", () => {
  blockimg1.style.display = "inline-block";
  blockimg5.style.display = "none";
});


block6.addEventListener("mouseover", () => {
  blockimg1.style.display = "none";
  blockimg6.style.display = "inline-block";
});
block6.addEventListener("mouseout", () => {
  blockimg1.style.display = "inline-block";
  blockimg6.style.display = "none";
});









block7.addEventListener("mouseover", () => {
  blockimg1.style.display = "none";
  blockimg7.style.display = "inline-block";
});
block7.addEventListener("mouseout", () => {
  blockimg1.style.display = "inline-block";
  blockimg7.style.display = "none";
});



block8.addEventListener("mouseover", () => {
  blockimg1.style.display = "none";
  blockimg8.style.display = "inline-block";
});
block8.addEventListener("mouseout", () => {
  blockimg1.style.display = "inline-block";
  blockimg8.style.display = "none";
});



*/







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

/*
document.querySelector ('.prev'). addEventListener('click', function(){
  offset = offset - 243; 
  sliderLine.style.left = offset + 'px';

  if (offset < 0) {
    
    offset = 0;
    sliderLine.style.left = 0;


    
  }
  
});

*/


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




