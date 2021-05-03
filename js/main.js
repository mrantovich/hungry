const swiper = new Swiper('.swiper-container', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const aboutElement = document.getElementById('about');
const arrowElement = document.querySelector('.main__arrow');

arrowElement.addEventListener('click', scrollToAbout);

document.getElementById('defaultOpen').click();

const burgerElement = document.querySelector('.burger');
const headerBoxElement = document.querySelector('.header__box');
const headerLeftElement = document.querySelector('.header__left');
const headerRightElement = document.querySelector('.header__right');

burgerElement.addEventListener('click', addActive);

function addActive() {
	this.classList.toggle('_active');
	headerBoxElement.classList.toggle('_active');
	headerLeftElement.classList.toggle('_active');
	headerRightElement.classList.toggle('_active');
}

function scrollToAbout() {
	aboutElement.scrollIntoView({
		behavior: 'smooth',
	});
}

function openMenu(event, menuName) {
	let i, tabscontent, tabsitem;

	tabscontent = document.getElementsByClassName('tabs__content');
	for (i=0; i < tabscontent.length; i++) {
		tabscontent[i].style.display = 'none';
	}

	tabsitem = document.getElementsByClassName('tabs__item');
	for (i=0; i < tabsitem.length; i++) {
		tabsitem[i].className = tabsitem[i].className.replace(' _active', '');
	}

	document.getElementById(menuName).style.display = 'block';
	event.currentTarget.className += ' _active'
}