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

function checkWidth () {
  if (body.offsetWidth > 992) {
    listToShow = 4
  }
  if (body.offsetWidth > 769) {
    slideToShow = 3
    listToShow = 3
  }
  if (body.offsetWidth >= 576 && body.offsetWidth <= 768) {
    slideToShow = 2
    listToShow = 2
  }
  if (body.offsetWidth < 576) {
    slideToShow = 1
  }
  if (body.offsetWidth <= 460) {
    listToShow = 1
  }
}





const  btnLeftList = document.querySelector('#btnLeftList')
const  btnRightList = document.querySelector('#btnRightList')
const  selection = document.querySelector('.check-list__selection')
const  lists = document.querySelectorAll('.selection__block')

let listToShow = 0;
let activeList = 0;

function changeCheckList () {
  const arrPosition = []
  const gap = window.getComputedStyle(selection).gap.slice(0, -2)
  const listWidth = lists[0].offsetWidth;

  for (let i = 0; i < lists.length; i++) {
    if (i === 0) {
      arrPosition.push(0)
    } else {
      arrPosition.push(-(listWidth + +gap) * i)
    } 
  }

  position = arrPosition[activeList]
  selection.style.transform = `translateX(${position}px)`
}

btnRightList.addEventListener('click', () => {
  checkWidth ()

  if (activeList + listToShow !== lists.length) {
    activeList++
    console.log(activeList, "active")
    console.log(listToShow, "list")
    console.log(lists.length)
  }

  changeCheckList()
  
})

btnLeftList.addEventListener('click', () => {
  checkWidth ()

  if (activeList !== 0) {
    activeList--
  }

  changeCheckList();
})


checkWidth ()


console.log('work') 

const wrappers = document.querySelectorAll('.wrapper-item')
const spans = document.querySelectorAll("#open")

const app = document.querySelector('.app')

let open = false

app.addEventListener('click', () => {
  if (open === true) {
    hideItems()
    open = false
  }
})

function hideItems () {
  wrappers.forEach(wrapper => {
    const items = wrapper.querySelectorAll(".block__item")
    for (let i = 0; i < items.length; i++) {
      if (i > 4) {
        items[i].style.height = '0px'
        items[i].style.overflow = 'hidden'
        items[i].style.marginBottom = '0px'
      }
    }
  })
}
hideItems()

spans.forEach((span) => {
  span.addEventListener('click', showItems)
})


function showItems() {
  console.log(this.parentNode)
  this.parentNode.querySelectorAll(".block__item").forEach(item => {
    item.style.removeProperty('height')
    item.style.removeProperty('overflow')
    item.style.marginBottom = '20px'
  })
  setTimeout(() => {
    open = true
  }, 400)
}