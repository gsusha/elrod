/* 
function filterHide(producer) {
	marketItemArr = document.getElementsByClassName(producer);
	for (var i = 0; i < marketItemArr.length; i++) {
		item = marketItemArr[i];
		if (item.style.display == "flex") {
			item.style.display = "none";
		} else {
			item.style.display = "flex";
		}
	}
}
*/

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