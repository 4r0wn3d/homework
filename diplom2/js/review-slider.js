export const reviewSlider = () => {
	new Swiper(".reviews__slider", {
		slidesPerView: "auto",
		centeredSlides: true,
		spaceBetween: 20,
		loopedSlides: 10,
		loopPreventsSliding: false,
		loop: true,
		initialSlide: 2,
		mousewheel: {
			forceToAxis: true,
		},
		navigation: {
			prevEl: ".reviews__slider-button--prev",
			nextEl: ".reviews__slider-button--next",
		},
	});
};
