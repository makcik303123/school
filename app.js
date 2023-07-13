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

btnRight.addEventListener('click', () => {
  const gap = window.getComputedStyle(slider).gap.slice(0, -2)
  const slideWidth = slides[0].offsetWidth;
  console.log(gap)
  console.log(slideWidth)
  position -= Number(slideWidth) + Number(gap)
  slider.style.transform = `translateX(${position}px)`
})

btnLeft.addEventListener('click', () => {
  position += 460
  slider.style.transform = `translateX(${position}px)`
})


console.log('work') 