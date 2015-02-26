$(document).ready(function(){
	new WOW().init();
	$('.scroll').on('click', function(e) {
		e.preventDefault();
		$('.active').removeClass('active');
		$(this).addClass('active');
		var x = $(this).attr('href');
		$('body').animate({
			scrollTop: $(''+x+'').offset().top 
		}, 700);
	});
});
