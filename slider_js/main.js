const img = document.querySelector('.slider__image');
const prevArrow = document.querySelector('.slider__nav-left');
const nextArrow = document.querySelector('.slider__nav-right');

const dots = document.querySelectorAll('.slider__dot');
const imgArr = ['./img/1.jpg', './img/2.jpg', './img/3.jpg'];

let currentIndex = 0;

//устанавливаем индекс точки, и передаем в функцию переключения
function changeIndex(ind) {
  currentIndex = ind;
  slide(currentIndex);
}

function nextIndex(direction) {
  currentIndex += direction;
  //проверка на допустимый индекс
  if (currentIndex >= imgArr.length) {
    currentIndex = 0; //обнуляем индекс
  } else if (currentIndex < 0) {
    currentIndex = imgArr.length - 1; //присваеваем последний элемент
  }
  slide(currentIndex);
}

// ФУНКЦИЯ СМЕНЫ СЛАЙДОВ
function slide(index) {
  img.style.display = 'none';
  setTimeout(() => {
    img.style.display = 'block';
  }, 0);

  img.src = imgArr[index];

  updateDots(index);
}

function updateDots(indexDots) {
  for (let dot of dots) {
    dot.classList.remove('active');
  }
  dots[indexDots].classList.add('active');
}
