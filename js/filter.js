$(document).ready(function() {
	$('#kugoo').click(function(event) {
		$('#kugoo').toggleClass('active');
		$('.minipro').toggle();
	});


	$('#minipro').click(function(event) {
		$('#minipro').toggleClass('active');
		$('.kugoo').toggle();
	});
}); 