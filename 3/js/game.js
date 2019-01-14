$(document).ready(function(){
	//alert('I am a jQuery code');


	/*$('.circle').on('mouseover', function(){
		$(this).css({
			'width': '100px',
			'height': '100px',
		});
	});

	$('.circle').on('mouseleave', function(){
		$(this).css({
			'width': '200px',
			'height': '200px',
		});
	});*/

	$('.circle').on('mouseover', function(){
		$(this).animate({
			'width': '100px',
			'height': '100px',
		});
	});

	$('.circle').on('mouseleave', function(){
		$(this).animate({
			'width': '200px',
			'height': '200px',
		});
	});
});