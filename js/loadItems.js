$('document').ready(function(){
	loadHover();
	loadEScooter();
});

function loadHover() {
	$.getJSON('/json/hoverboards.json', function(data){
		var item = "";
		for (var key in data){
			item += '<div class="market__item">';
			item += '<div class="market__name">' + data[key]['name'] + '</div>';
			item += '<div class="market__img"><img src="' + data[key]['img'] + '"></div>';
			item += '<div class="market__price">' + data[key]['price'] + '</div>';
			item += '<div class="market__desc"><ul>';
			item += '<li>' + data[key]['desc1'] + ': <span>' + data[key]['value1'] + '</span></li>';
			item += '<li>' + data[key]['desc2'] + ': <span>' + data[key]['value2'] + '</span></li>';
			item += '<li>' + data[key]['desc3'] + ': <span>' + data[key]['value3'] + '</span></li>';
			item += '<li>' + data[key]['desc4'] + ': <span>' + data[key]['value4'] + '</span></li>';
			item += '<li>' + data[key]['desc5'] + ': <span>' + data[key]['value5'] + '</span></li>';
			item += '</div></ul>';
			item += '<div class="market__btn"><button class="order-btn" onClick="openModal();">Заказать</button></div>';
			item += '</div>'
		}
		$('#hoverboardItems').html(item);
	});
}

function loadEScooter() {
	$.getJSON('/json/escooters.json', function(data){
		var item = "";
		for (var key in data){
			item += '<div class="market__item">';
			item += '<div class="market__name">' + data[key]['name'] + '</div>';
			item += '<div class="market__img"><img src="' + data[key]['img'] + '"></div>';
			item += '<div class="market__price">' + data[key]['price'] + '</div>';
			item += '<div class="market__desc"><ul>';
			item += '<li>' + data[key]['desc1'] + ': <span>' + data[key]['value1'] + '</span></li>';
			item += '<li>' + data[key]['desc2'] + ': <span>' + data[key]['value2'] + '</span></li>';
			item += '<li>' + data[key]['desc3'] + ': <span>' + data[key]['value3'] + '</span></li>';
			item += '</div></ul>';
			item += '<div class="market__btn"><button class="order-btn" onClick="openModal();">Заказать</button></div>';
			item += '</div>'
		}
		$('#eScootersItems').html(item);
	});
}