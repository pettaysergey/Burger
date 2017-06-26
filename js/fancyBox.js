$(function(){
	$('.reviews__button').fancybox({
		type : 'inline',
		modal : true
	})

	$('.full-review__close').on('click', function(e){
		e.preventDefault();

		$.fancybox.close();
	})

})