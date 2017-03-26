var menu = document.getElementById('header_menu');
var items = menu.getElementsByClassName('navbar_menu_item');
var header = document.getElementById('header');

function redrawMenu() {
	items[items.length - 1].style.display = 'block'; 
	items[items.length - 2].style.display = 'block'; 
	items[items.length - 3].style.display = 'block'; 
	items[items.length - 4].style.display = 'block'; 
	items[items.length - 5].style.display = 'block'; 
	items[items.length - 6].style.display = 'block'; 
	console.log(header.clientWidth);
	if (header.clientWidth < 1000) {
		items[items.length - 1].style.display = 'none'; 
	}
	if (header.clientWidth  < 900) {
		items[items.length - 2].style.display = 'none'; 
	}
	if (header.clientWidth  < 800) {
		items[items.length - 3].style.display = 'none'; 
	}
	if (header.clientWidth  < 700) {
		items[items.length - 4].style.display = 'none'; 
	}
	if (header.clientWidth  < 600) {
		items[items.length - 5].style.display = 'none'; 
	}
	if (header.clientWidth  < 500) {
		items[items.length - 6].style.display = 'none'; 
	}
}