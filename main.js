const burger = document.querySelector('.burger-btn')

burger.addEventListener('click', function () {
	burger.classList.toggle('transform')

	const burgerMenu = document.querySelector('.header__burger-menu')
	burgerMenu.classList.toggle('header__burger-menu--opened')
})
