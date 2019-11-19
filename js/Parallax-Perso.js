// velocidade do 1° fundo 

$(document).ready(function(){
$('div.bgParallax#portfolio').each(function(){
	var $obj = $(this);

	$(window).scroll(function() {
		var yPos = -(($(window).scrollTop() / $obj.data('speed')) - 0); 

		var bgpos = '50%' + yPos + 'px';

		$obj.css('background-position', bgpos );

	}); 
});	
});

$(document).ready(function(){
$('div.bgParallax#sobre').each(function(){
	var $obj = $(this);

	$(window).scroll(function() {
		var yPos = -(($(window).scrollTop() / $obj.data('speed')) - 1400); 

		var bgpos = '50%' + yPos + 'px';

		$obj.css('background-position', bgpos );

	}); 
});	
});

