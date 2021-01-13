function toggleSidebar() {
	$(".primary_nav").toggleClass("toggleActive");
}

// banner slider
var swiper = new Swiper('.banner_slider', {
	speed: 800,
	spaceBetween: 30,
	effect: 'fade In',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});