const hamburgerBtn = document.querySelector("#wrapper__icon");
const hamburgerBody = document.querySelector("#menu__body");
const body = document.querySelector("body");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  hamburgerBody.classList.toggle("active");
  body.classList.toggle("lock");
});

hamburgerBody.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerBtn.classList.remove("active");
    hamburgerBody.classList.remove("active");
    body.classList.remove("lock");
  });
});




const  btnLeft = document.querySelector('#btnLeft')
const  btnRight = document.querySelector('#btnRight')
const  slider = document.querySelector('.slider__scroll')
const  slides = document.querySelectorAll('.slide')

let position = 0;
let activeSlide = 0;
let slideToShow = 0;

btnRight.addEventListener('click', () => {
  checkWidth ()

  if (activeSlide + slideToShow !== slides.length) {
  activeSlide++
  }

  createPosArray()
  
})

btnLeft.addEventListener('click', () => {
  checkWidth ()

  if (activeSlide !== 0) {
  activeSlide--
  }

  createPosArray()
})


function checkWidth () {
  if (body.offsetWidth > 769) {
    slideToShow = 3
  }
  if (body.offsetWidth >= 576 && body.offsetWidth <= 768) {
    slideToShow = 2
  }
  if (body.offsetWidth < 576) {
    slideToShow = 1
  }
}

checkWidth ()

function createPosArray () {
  const arrPosition = []
  const gap = window.getComputedStyle(slider).gap.slice(0, -2)
  const slideWidth = slides[0].offsetWidth;

  for (let i = 0; i < slides.length; i++) {
    if (i === 0) {
      arrPosition.push(0)
    } else {
      arrPosition.push(-(slideWidth + +gap) * i)
    } 
  }

  position = arrPosition[activeSlide]
  slider.style.transform = `translateX(${position}px)`
}




console.log('work') 