let burgerElement = document.querySelector('.burger');

burgerElement.addEventListener('click', addActive);

function addActive() {
	this.classList.toggle('_active');
}

