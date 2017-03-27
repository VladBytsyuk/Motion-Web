'use strict';

var menu = document.getElementById('header_menu');
var items = menu.getElementsByClassName('navbar_menu_item');
var header = document.getElementById('header');
var hamburger = document.getElementById('ham');

function redrawMenu() {
	items[items.length - 1].style.display = 'block';
	items[items.length - 2].style.display = 'block';
	items[items.length - 3].style.display = 'block';
	items[items.length - 4].style.display = 'block';
	items[items.length - 5].style.display = 'block';
	items[items.length - 6].style.display = 'block';
	if (header.clientWidth < 1000) {
		items[items.length - 1].style.display = 'none';
		hamburger.style.visibility = 'visible';
	} else {
		hamburger.style.visibility = 'hidden';
	}
	if (header.clientWidth < 900) {
		items[items.length - 2].style.display = 'none';
	}
	if (header.clientWidth < 800) {
		items[items.length - 3].style.display = 'none';
	}
	if (header.clientWidth < 700) {
		items[items.length - 4].style.display = 'none';
	}
	if (header.clientWidth < 600) {
		items[items.length - 5].style.display = 'none';
	}
	if (header.clientWidth < 500) {
		items[items.length - 6].style.display = 'none';
	}
}
redrawMenu();

var hamburgerAction = new function () {
	var hamPopup = document.getElementById('popup');
	var headerPopup = document.getElementById('header_popup');
	var popupItems = headerPopup.getElementsByClassName('popup_item');
	var isOpen = false;
	var i;

	function clear() {
		for (i = 0; i < popupItems.length; ++i) {
			popupItems[i].style.display = 'none';
		}
	}

	function open() {
		clear();
		for (i = 0; i < items.length; ++i) {
			if (items[i].style.display == 'none') {
				popupItems[i].style.display = 'block';
			}
		}
		headerPopup.style.visibility = 'visible';
		headerPopup.style.opacity = 1;
	}

	function close() {
		headerPopup.style.visibility = 'hidden';
		headerPopup.style.opacity = 0;
	}

	function click() {
		isOpen ? close() : open();
		isOpen = !isOpen;
	}

	return {
		click: click,
		close: close
	};
}();

hamburger.addEventListener('click', hamburgerAction.click);
var callback = document.getElementById('callback_btn');

var callbackAction = new function () {
	var popup = document.getElementById('popup');

	var nameField = document.getElementById('fname');
	var phoneField = document.getElementById('fnumber');
	var adressField = document.getElementById('fadress');
	var submit = document.getElementById('popup_btn');

	function open() {
		nameField.value = '';
		phoneField.value = '';
		adressField.value = '';
		popup.style.visibility = 'visible';
		popup.style.opacity = 1;
	}

	function close() {
		popup.style.visibility = 'hidden';
		popup.style.opacity = 0;
	}

	function send(userInfo) {
		close();
	}

	submit.addEventListener('click', function () {
		nameField.style.borderColor = '#232324';
		phoneField.style.borderColor = '#232324';
		adressField.style.borderColor = '#232324';
		var nameRegEp = /^[a-zA-Z]{2,30}$/;
		var phoneRegExp = /^[0-9]{7,16}$/;
		var adressRegExp = /\S+@\S+\.\S+/;
		var isBreak = false;
		if (nameField.value === '' || !nameField.value.match(nameRegEp)) {
			nameField.style.borderColor = '#eb4f4e';
			isBreak = true;
		}
		if (phoneField.value === '' || !phoneField.value.match(phoneRegExp)) {
			phoneField.style.borderColor = '#eb4f4e';
			isBreak = true;
		}
		if (adressField.value === '' || !adressField.value.match(adressRegExp)) {
			adressField.style.borderColor = '#eb4f4e';
			isBreak = true;
		}
		if (isBreak) {
			return;
		}
		var userInfo = {
			name: nameField.value,
			phone: phoneField.value,
			adress: adressField.value
		};
		send(userInfo);
	});

	return {
		open: open
	};
}();

callback.addEventListener('click', callbackAction.open);

var portfolioArrowRight = document.getElementById('portfolio_next');
var portfolioArrowLeft = document.getElementById('portfolio_prev');

var portfolioSlider = new function () {
	var slider = document.getElementById('portfolio_slider');
	var slideHolder = document.getElementById('portfolio_holder');
	var slides = slider.getElementsByClassName('portfolio_box');
	var pages = document.getElementsByClassName('portfolio_pages_item');
	var slidesAmount = slides.length;
	var currentSlide = 0;
	slides[currentSlide].style.opacity = 1;
	pages[currentSlide].classList.add('portfolio_pages_item_highlighted');
	init(undefined);

	function init(event) {
		slideHolder.style.height = slides[currentSlide].clientHeight + 'px';
	}

	function nextSlide() {
		slides[currentSlide].style.opacity = 0;
		pages[currentSlide].classList.remove('portfolio_pages_item_highlighted');
		currentSlide = currentSlide < slidesAmount - 1 ? currentSlide + 1 : 0;
		slides[currentSlide].style.opacity = 1;
		pages[currentSlide].classList.add('portfolio_pages_item_highlighted');
		init(undefined);
	}

	function prevSlide() {
		slides[currentSlide].style.opacity = 0;
		pages[currentSlide].classList.remove('portfolio_pages_item_highlighted');
		currentSlide = currentSlide > 0 ? currentSlide - 1 : slidesAmount - 1;
		slides[currentSlide].style.opacity = 1;
		pages[currentSlide].classList.add('portfolio_pages_item_highlighted');
		init(undefined);
	}

	return {
		init: init,
		nextSlide: nextSlide,
		prevSlide: prevSlide
	};
}();

portfolioArrowRight.addEventListener('click', portfolioSlider.nextSlide);
portfolioArrowLeft.addEventListener('click', portfolioSlider.prevSlide);
window.onresize = function () {
	portfolioSlider.init();
	tweetsSlider.init();
	redrawMenu();
	hamburgerAction.close();
};
var tweetsArrowRight = document.getElementById('tweets_next');
var tweetsArrowLeft = document.getElementById('tweets_prev');

var tweetsSlider = new function () {
	var slideHolder = document.getElementById('tweets_hearth');
	var slides = slideHolder.getElementsByClassName('tweets_hearth_tweet');
	var slidesAmount = slides.length;
	var currentSlide = 0;
	slides[currentSlide].style.opacity = 1;
	init(undefined);

	function init(event) {
		slideHolder.style.width = slides[currentSlide].clientWidth + 'px';
		slideHolder.style.height = slides[currentSlide].clientHeight + 'px';
	}

	function nextSlide() {
		slides[currentSlide].style.opacity = 0;
		currentSlide = currentSlide < slidesAmount - 1 ? currentSlide + 1 : 0;
		slides[currentSlide].style.opacity = 1;
	}

	function prevSlide() {
		slides[currentSlide].style.opacity = 0;
		currentSlide = currentSlide > 0 ? currentSlide - 1 : slidesAmount - 1;
		slides[currentSlide].style.opacity = 1;
	}

	return {
		init: init,
		nextSlide: nextSlide,
		prevSlide: prevSlide
	};
}();

tweetsArrowRight.addEventListener('click', tweetsSlider.nextSlide);
tweetsArrowLeft.addEventListener('click', tweetsSlider.prevSlide);