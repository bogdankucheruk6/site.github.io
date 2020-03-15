$(document).ready(function() {

	/*function initMap() {
		let opt = {
			center: {lat:50.2494289 , lng:28.6676307}, 
			zoom: 4
		}
	}*/
	



	$('#owl_carousel_4').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		navText: ['<img src=\'img/arrow_l1.png\'>','<img src=\'img/arrow_r1.png\'>'],
		items: 1,
	}); 


	$('#owl_carousel_1').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 3000,
	});

	$('#owl_carousel_2').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		navText : ['<img src=\'img/arrow_l.png\'>','<img src=\'img/arrow_r.png\'>'],
		responsive: {
			0:{
				items: 1,		
			},
			768:{
				items: 2,
			},
			1024:{
				items: 3,
			},
		}
	});

	$('#owl_carousel_3').owlCarousel({
		loop: true,
		nav: true,
		navText: ['<img src=\'img/arrow_l.png\'>','<img src=\'img/arrow_r.png\'>'],
		responsive: {
			0:{
				items: 1,		
			},
			768:{
				items: 2,
			},
			1024:{
				items: 3,
			},
			1280:{
				items: 4,
			},
		}
	});

	



	let burger = $('.burger');
	let burgerDis = $('.sidebar_nav__wrapper');
	let close = $('.close_wrapper');



	burger.on('click', function() {
		burgerDis.toggleClass('sidebar_nav__wrapper__dis');
		burger.toggleClass('burger_dis');
	});

	close.on('click', function(){
		burgerDis.toggleClass('sidebar_nav__wrapper__dis');
		burger.toggleClass('burger_dis');	
	});



	$('.item_1').on('click', function() {
		$('.title_1').toggleClass('section_7__wrapper_title_dis');
	});

	$('.item_2').on('click', function() {
		$('.title_2').toggleClass('section_7__wrapper_title_dis');
	});	

	$('.item_3').on('click', function() {
		$('.title_3').toggleClass('section_7__wrapper_title_dis');
	});	

	$('.item_4').on('click', function() {
		$('.title_4').toggleClass('section_7__wrapper_title_dis');
	});	

	$('.item_5').on('click', function() {
		$('.title_5').toggleClass('section_7__wrapper_title_dis');
	});	

	$('.item_6').on('click', function() {
		$('.title_6').toggleClass('section_7__wrapper_title_dis');
	});	

	$('.item_7').on('click', function() {
		$('.title_7').toggleClass('section_7__wrapper_title_dis');
	});	

	$('.item_8').on('click', function() {
		$('.title_8').toggleClass('section_7__wrapper_title_dis');
	});	

	$('.item_9').on('click', function() {
		$('.title_9').toggleClass('section_7__wrapper_title_dis');
	});		



	let circle_1 = $('.circle_1');
	let circle_2 = $('.circle_2');
	let circle_3 = $('.circle_3');
	let circle_4 = $('.circle_4');
	let radius_1 = circle_1.attr('r');
	let circumference_1 = 2 * Math.PI * radius_1;
	let radius_2 = circle_2.attr('r');
	let circumference_2 = 2 * Math.PI * radius_2;
	let radius_3 = circle_3.attr('r');
	let circumference_3 = 2 * Math.PI * radius_3;
	let radius_4 = circle_4.attr('r');
	let circumference_4 = 2 * Math.PI * radius_4;
	


	circle_1.css('stroke-dasharray', circumference_1);
	circle_2.css('stroke-dasharray', circumference_2);
	circle_3.css('stroke-dasharray', circumference_3);
	circle_4.css('stroke-dasharray', circumference_4);

	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 2000) {
			let persent_1 = $('.ellement_1_1').html();
			let offset_1 = circumference_1 - persent_1 / 100 * circumference_1;
			circle_1.css('stroke-dashoffset', offset_1);

			let persent_2 = $('.ellement_1_2').html();
			let offset_2 = circumference_2 - persent_2 / 100 * circumference_2;
			circle_2.css('stroke-dashoffset', offset_2);

			let persent_3 = $('.ellement_1_3').html();
			let offset_3 = circumference_3 - persent_3 / 100 * circumference_3;
			circle_3.css('stroke-dashoffset', offset_3);
				
			let persent_4 = $('.ellement_1_4').html();
			let offset_4 = circumference_4 - persent_4 / 100 * circumference_4;
			circle_4.css('stroke-dashoffset', offset_4);
		}		
	});



	/*let stepOneFunc = null;
	let button = $('[type="submit"]').prop('disabled', true);


	function userCheckInput(selector) {
		let value = selector.val();
		let valueLength = value.length;
		let textError = selector.attr('data-error');

		if (valueLength < 8) {
			selector.attr('data-status', '0');
			selector.css('border', '1px solid red');
		} else {
			selector.attr('data-status', '1');
			selector.css('border', '1px solid green');
		}
	}
	
	$('.form .input').on('change keydown', function() {
		let inputClass = $(this)[0]['className'];
		let inputName = $(this)[0]['name'];
		let inputTag = $(`.${inputClass}[name="${inputName}"]`);
    	userCheckInput(inputTag);
	});

	function stepOne(){
    let block = $('.input');
    let blockLength = $('.input').length;
    let sum = null;

    for(let i = 0; i < blockLength; i++){
      let data = block.eq(i).children('input').attr('data-status');
      sum += +data;
    }

    if(sum == blockLength){
      return stepOneFunc = 1;
    } else {
      return stepOneFunc = null;
    }
  }
  stepOne();
  if (stepOneFunc == 1) {
  	$('[type="submit"]').prop('disabled', false)
  }  else {
  	$('[type="submit"]').prop('disabled', true)
  }*/


  	let input = $('.input');
	let form = $('.form');
	let inputName = null;
	let inputEmail = null;

	input.on('change', function(){
		if ($(this).attr('name') == 'name'){
			inputName = $(this).val();
		} else if ($(this).attr('name') == 'email'){
			inputEmail = $(this).val();
		} 
	});

  	form.on('submit', function(event){
		event.preventDefault;

			if (inputName == null || inputName.length < 8){
				$('input[name="name"]').css('border', '2px solid red');
			} else {
				inputName = true;
				$('input[name="name"]').css('border', '2px solid green');
			}
			if (inputEmail == null || inputEmail.length < 8){
				$('input[name="email"]').css('border', '2px solid red');
			} else {
				inputEmail = true;
				$('input[name="email"]').css('border', '2px solid green');
			}
			if (inputName == true && inputEmail == true) {
				alert("Данные отправлены!");
			} 	
			return false;
	});

});

