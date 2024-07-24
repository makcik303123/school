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

const sectionInformation = document.querySelector(".information");
const btnLeft = sectionInformation.querySelector("#btnLeft");
const btnRight = sectionInformation.querySelector("#btnRight");
const slider = sectionInformation.querySelector(".slider__scroll");
const slides = sectionInformation.querySelectorAll(".slide");

let position = 0;
let activeSlide = 0;
let slideToShow = 0;

btnRight.addEventListener("click", () => {
	checkWidth();

	if (activeSlide + slideToShow !== slides.length) {
		activeSlide++;
	}

	createPosArray();
});

btnLeft.addEventListener("click", () => {
	checkWidth();

	if (activeSlide !== 0) {
		activeSlide--;
	}

	createPosArray();
});

function createPosArray() {
	const arrPosition = [];
	const gap = window.getComputedStyle(slider).gap.slice(0, 2);
	const slideWidth = slides[0].offsetWidth;

	for (let i = 0; i < slides.length; i++) {
		if (i === 0) {
			arrPosition.push(0);
		} else {
			arrPosition.push(-(slideWidth + +gap) * i);
		}
	}

	position = arrPosition[activeSlide];
	slider.style.transform = `translateX(${position}px)`;
}

function checkWidth() {
	if (body.offsetWidth > 992) {
		listToShow = 4;
	}
	if (body.offsetWidth > 769) {
		slideToShow = 3;
		listToShow = 3;
	}
	if (body.offsetWidth >= 576 && body.offsetWidth <= 768) {
		slideToShow = 2;
		listToShow = 2;
	}
	if (body.offsetWidth < 576) {
		slideToShow = 1;
		listToShow = 2;
	}
	if (body.offsetWidth <= 460) {
		listToShow = 1;
	}
}

const btnLeftList = document.querySelector("#btnLeftList");
const btnRightList = document.querySelector("#btnRightList");
const selection = document.querySelector(".check-list__selection");
const lists = document.querySelectorAll(".selection__block");

let listToShow = 0;
let activeList = 0;
let pos1;

// function changeCheckList() {
// 	const arrPosition = [];
// 	const gap = window.getComputedStyle(selection).gap.slice(0, 2);
// 	const listWidth = lists[0].offsetWidth;

// 	for (let i = 0; i < lists.length; i++) {
// 		if (i === 0) {
// 			arrPosition.push(0);
// 		} else {
// 			arrPosition.push(-(listWidth + +gap) * i);
// 		}
// 	}

// 	position = arrPosition[activeList];
// 	selection.style.transform = `translateX(${position}px)`;
// }

// selection.addEventListener("touchstart", (event) => {
// 	pos1 = event.touches[0].clientX;
// 	console.log(pos1);
// });

// selection.addEventListener("touchend", (event) => {
// 	const pos2 = event.changedTouches[0].clientX;
// 	checkWidth();
// 	if (
// 		pos1 > pos2 &&
// 		pos1 - pos2 > 50 &&
// 		activeList + listToShow !== lists.length
// 	) {
// 		activeList++;
// 	}
// 	if (pos2 > pos1 && pos2 - pos1 > 50 && activeList !== 0) {
// 		activeList--;
// 	}
// 	changeCheckList();
// });

// selection.addEventListener("touchmove", (event) => {
// 	const move = event.touches[0].clientX - pos1;
// 	console.log(move);
// 	console.log(event);
// 	selection.style.transform = `translateX(${position + move}px)`;
// });
// btnRightList.addEventListener("click", () => {
// 	checkWidth();

// 	if (activeList + listToShow !== lists.length) {
// 		activeList++;
// 	}

// 	changeCheckList();
// });

// btnLeftList.addEventListener("click", () => {
// 	checkWidth();

// 	if (activeList !== 0) {
// 		activeList--;
// 	}

// 	changeCheckList();
// });

// checkWidth();

// const wrappers = document.querySelectorAll(".wrapper-item");
// const spans = document.querySelectorAll("#open");

// const arrayListOpen = Array(wrappers.length).fill(false);

// wrappers.forEach((wrapper) => {
// 	const items = wrapper.querySelectorAll(".block__item");
// 	for (let i = 0; i < items.length; i++) {
// 		if (i > 4) {
// 			items[i].style.height = "0px";
// 			items[i].style.overflow = "hidden";
// 			items[i].style.marginBottom = "0px";
// 		}
// 	}
// });

// function hideItems(span, index) {
// 	const items = span.parentNode.querySelectorAll(".block__item");
// 	for (let i = 0; i < items.length; i++) {
// 		if (i > 4) {
// 			items[i].style.height = "0px";
// 			items[i].style.overflow = "hidden";
// 			items[i].style.marginBottom = "0px";
// 			items[i].style.opacity = "0";
// 		}
// 	}

// 	span.classList.remove("active");
// 	arrayListOpen[index] = false;
// }

// spans.forEach((span, index) => {
// 	span.addEventListener("click", () => {
// 		arrayListOpen[index] === false
// 			? showItems(span, index)
// 			: hideItems(span, index);
// 	});
// });

// function showItems(span, index) {
// 	span.parentNode.querySelectorAll(".block__item").forEach((item) => {
// 		item.style.removeProperty("height");
// 		item.style.removeProperty("overflow");
// 		item.style.marginBottom = "20px";
// 		item.style.opacity = "1";
// 	});
// 	span.classList.add("active");

// 	arrayListOpen[index] = true;
// }

// const sectionProduct = document.querySelector(".product");
// const btnLeftP = sectionProduct.querySelector("#btnLeftSlideProduct");
// const btnRightP = sectionProduct.querySelector("#btnRightSlideProduct");
// const sliderP = sectionProduct.querySelector(".slider__scroll");
// const slidesP = sectionProduct.querySelectorAll(".slide");

let positionP = 0;
let activeSlideP = 0;
let slideToShowP = 2;

// btnRightP.addEventListener("click", () => {
// 	widthForProduct();

// 	if (activeSlideP + slideToShowP !== slidesP.length) {
// 		activeSlideP++;
// 	}

// 	createPosArrayP();
// });

// btnLeftP.addEventListener("click", () => {
// 	widthForProduct();

// 	if (activeSlideP !== 0) {
// 		activeSlideP--;
// 	}

// 	createPosArrayP();
// });

// function createPosArrayP() {
// 	const arrPosition = [];
// 	const gap = window.getComputedStyle(sliderP).gap.slice(0, 2);
// 	const slideWidth = slidesP[0].offsetWidth;

// 	for (let i = 0; i < slidesP.length; i++) {
// 		if (i === 0) {
// 			arrPosition.push(0);
// 		} else {
// 			arrPosition.push(-(slideWidth + +gap) * i);
// 		}
// 	}

// 	positionP = arrPosition[activeSlideP];
// 	sliderP.style.transform = `translateX(${positionP}px)`;
// }

// function widthForProduct() {
// 	if (
// 		(body.offsetWidth < 1200 && body.offsetWidth >= 768) ||
// 		body.offsetWidth <= 460
// 	) {
// 		slideToShowP = 1;
// 	} else {
// 		slideToShowP = 2;
// 	}
// }

const anchors = document.querySelectorAll(".anchors");

console.log(anchors);

for (let anchor of anchors) {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		hamburgerBtn.classList.remove("active");
		hamburgerBody.classList.remove("active");
		body.classList.remove("lock");

		const blockID = anchor.getAttribute("href").slice(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: "smooth",
			block: "center",
		});
	});
}
