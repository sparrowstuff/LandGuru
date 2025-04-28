const burger = document.querySelector('.burger-btn')

burger.addEventListener('click', function () {
	burger.classList.toggle('transform')

	const burgerMenu = document.querySelector('.header__burger-menu')
	burgerMenu.classList.toggle('header__burger-menu--opened')
})

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	slidesPerView: 3,
	spaceBetween: 10,
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	speed: 600,

	breakpoints: {
		// от брейкпоинта в 2000 пикселей идет 3 слайда
		2000: {
			slidesPerView: 3,
		},

		1000: {
			slidesPerView: 3,
		},

		// от брейкпоинта в 768 пикселей идет 2 слайда
		768: {
			slidesPerView: 2,
		},

		480: {
			slidesPerView: 1,
		},

		320: {
			slidesPerView: 1,
		},
	},
})
