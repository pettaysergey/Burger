$(function () {

	var carousel = $('.select-content__list').owlCarousel({


	items:1,
	loop: true,
	smartSpeed: 1000
	})

	$('.select__scroll-next').on('click', function(e){
		e.preventDefault();
		carousel.trigger('next.owl.carousel');
	})

	$('.select__scroll-prev').on('click', function(e){
		e.preventDefault();
		carousel.trigger('prev.owl.carousel');
		console.log(carousel)
	})

})
