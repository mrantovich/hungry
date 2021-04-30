const burgerElement = document.querySelector('.burger');
const headerElement = document.querySelector('.header__box');
const headerRightElement = document.querySelector('.header__box-right');
const headerLeftElement = document.querySelector('.header__box-left');

burgerElement.addEventListener('click', addActive);

function addActive() {
	this.classList.toggle('_active');
	headerElement.classList.toggle('_active');
	headerRightElement.classList.toggle('_active');
	headerLeftElement.classList.toggle('_active');
}

