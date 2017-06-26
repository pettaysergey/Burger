// // one-scroll-page

// $(function(){

// 	var sections = $('.section'),
// 		display =$('.main-content'),
// 		inScroll = false;

// 	var scrollToSection = function (sectionEq) {
// 		var position =0;

// 		if (!inScroll) {

// 			inScroll = true;

// 			position = (sections.eq(sectionEq).index() * -100) + "%";

// 			sections.eq(sectionEq).addClass('active')
// 				.siblings().removeClass('active');

// 			display.css ({
// 				'transform' : 'translate3d(0, ' + position + ', 0)'
// 			});

// 			setTimeout(function() {
// 				inScroll=false;

// 				// удаления активного класса для бокового триггера
// 				$('.fixed-menu__item').eq(sectionEq).addClass('fixed-menu__item_active')
// 				.siblings().removeClass('fixed-menu__item_active');

// 			}, 1300)
// 		}
// 	}

// 	$(".wrapper-main").on('wheel', function(e) {
		
// 		var deltaY=e.originalEvent.deltaY,
// 			activeSection = sections.filter('.active'),
// 			nextSection = activeSection.next(),
// 			prevSection = activeSection.prev();

// 		// скроллим вниз
// 		if (deltaY > 0) { 

// 			if (nextSection.length) {
// 				scrollToSection(nextSection.index());
// 			}
// 		}

// 		// скроллим вверх
// 		if (deltaY < 0) {

// 			if (prevSection.length) {
// 				scrollToSection(prevSection.index());
// 			}
// 		}

// 	})

// 	// переход к секции по клику на стрелке "вниз"

// 	$('.intro__down').on('click', function(e){
// 		e.preventDefault();

// 		scrollToSection(1);
// 	})

// 	//переход к секции по клику в меню навигации и боковому триггеру

// 	$('.fixed-menu__link, .about__link, .buy').on('click', function(e){
// 		e.preventDefault();

// 		var href = parseInt($(this).attr('href'));

// 		scrollToSection(href);
// 	})

// 	// переход к секции по нажатию на клавиатуре

// 	$(document).on('keydown', function(e){
// 		console.log(e.keyCode);

// 		var activeSection = sections.filter('.active'),
// 			nextSection = activeSection.next(),
// 			prevSection = activeSection.prev();
			

// 		switch(e.keyCode) {
// 			// листаем вниз
// 			case 39 : 
// 				if (nextSection.length) {
// 				scrollToSection(nextSection.index());
// 				}	
// 				break;
// 			case 40 : 
// 				if (nextSection.length) {
// 				scrollToSection(nextSection.index());
// 				}	
// 				break;
// 			case 32 : 
// 				scrollToSection(7);
// 				break;

// 			// листаем вверх
// 			case 37 : 
// 				if (prevSection.length) {
// 				scrollToSection(prevSection.index());
// 				}
// 				break;
// 			case 38:
// 				if (prevSection.length) {
// 				scrollToSection(prevSection.index());
// 				}
// 				break;
// 		}
// 	})
// });

