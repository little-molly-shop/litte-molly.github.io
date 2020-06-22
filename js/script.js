$(function(){
	$('.burger-menu').on('click',function(){
		$('header nav').toggleClass('active');
		$(this).toggleClass('nav-active');
	});

	$('header nav ul li a').on('click',function(e){
		$('header nav').toggleClass('active');
		$('.burger-menu').toggleClass('nav-active');
		$(e).preventDefault();
	})
})