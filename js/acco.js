// Вертикальный аккордеон
$(function(){
	$('.team__link').on('click', function(e){
		e.preventDefault();

		var $this = $(this),
			item = $this.closest('.team__persons'),
			container = $this.closest('.team__members'),
			items = container.find('.team__persons'),
			content = item.find('.team__content'),
			otherContent = container.find('.team__content');

			if (!item.hasClass('active-team')) {
				items.removeClass('active-team');
				item.addClass('active-team');
				// otherContent.slideUp();
				content.slideDown();

		} else {
			item.removeClass('active-team');
			content.slideUp();
		}
	})
})

// Горизонтальный аккордеон

$(function(){
	$('.menu__trigger').on('click', function(e){
		e.preventDefault();

		var $this=$(this),
			container=$this.closest('.menu__list'),
			item=$this.closest('.menu__item'),
			items=container.find('.menu__item'),
			activeItem=items.filter('.active-menu'),
			content=item.find('.menu__description'),
			activeContent=activeItem.find('.menu__description');

		if (!item.hasClass('active-menu')) {

			items.removeClass('active-menu');
			item.addClass('active-menu');

			activeContent.animate({
				'width' : '0px'
			})

			content.animate({
				'width' : '550px'
			})
		} else {
			item.removeClass('active-menu');
			content.animate({
				'width' : '0px'
			})
		}
	})
})


	
// 	$(document).on('click', function(e){
// 		var $this=$(e.target);

// 		if (!$this.closest('.menu__list').lenght) {
// 			$('.menu__description').animate({
// 				'width' : '0px'
// 			})

// 			$('.menu__item').removeClass('active-menu');
// 		}
// 	})
// })