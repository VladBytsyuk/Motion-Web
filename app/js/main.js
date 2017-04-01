'use strict';

var menu = document.getElementById('header_menu');
var items = menu.getElementsByClassName('navbar_menu_item');
var header = document.getElementById('header');
var hamburger = document.getElementById('ham');

function redrawMenu() {
    showAll();
    hideUnnecessary();
}

function showAll() {
    var j = void 0;
    for (j = 0; j < items.length; ++j) {
        items[j].style.display = 'block';
    }
}

function hideUnnecessary() {
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
    var i = void 0;

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
    var infoBlock = document.getElementById('footer_info');

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
        var nameRegEp = /^[a-zA-Z]{2,30}$/;
        var phoneRegExp = /^[0-9]{7,16}$/;
        var adressRegExp = /\S+@\S+\.\S+/;
        var isBreak = false;
        var userInfo = {
            name: nameField.value,
            phone: phoneField.value,
            adress: adressField.value
        };
        nameField.style.borderColor = '#232324';
        phoneField.style.borderColor = '#232324';
        adressField.style.borderColor = '#232324';

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

    function init(event) {
        slideHolder.style.height = slides[currentSlide].clientHeight + 'px';
    }
    init(undefined);

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
var textGetter = new function () {

    var textRequest = new XMLHttpRequest();
    textRequest.open('GET', '/json/text.json', false);
    textRequest.send(null);

    function getJSONText() {
        if (textRequest.status == 200) {
            return JSON.parse(textRequest.responseText);
        } else {
            console.log('ERROR: Request code of \"text.json\" isn\'t 200 (' + textRequest.status + ')');
        }
        return null;
    }

    return {
        getJSONText: getJSONText
    };
}();

var textObject = textGetter.getJSONText();

function fillText(text) {
    fillHeader(text);
    fillMerits(text);
    fillTeam(text);

    function fillHeader(text) {
        document.getElementById('logo_title').innerText = text.header.logo.title;
        document.getElementById('logo_subtitle').innerText = text.header.logo.subtitle;
        var menuItems = document.getElementsByClassName('navbar_menu_item');
        for (var i = 0; i < menuItems.length; ++i) {
            menuItems[i].innerText = text.header.menu[i];
        }
        document.getElementById('slider_title').innerText = text.header.slider.title;
        document.getElementById('slider_subtitle').innerText = text.header.slider.subtitle;
    }

    function fillMerits(text) {
        document.getElementById('merits_title').innerText = text.merits.title;
        document.getElementById('merits_subtitle').innerText = text.merits.subtitle;
        var boxItems = document.getElementsByClassName('merits_box_item');
        for (var i = 0; i < boxItems.length; ++i) {
            boxItems[i].childNodes[3].innerText = text.merits.box[i].title;
            boxItems[i].childNodes[5].innerText = text.merits.box[i].subtitle;
        }
    }

    function fillTeam(text) {
        document.getElementById('team_title').innerText = text.team.title;
        document.getElementById('team_subtitle').innerText = text.team.subtitle;
        var teamItems = document.getElementsByClassName('team_box_item');
        for (var i = 0; i < teamItems.length; ++i) {
            teamItems[i].childNodes[3].innerText = text.team.box[i].name;
            teamItems[i].childNodes[5].innerText = text.team.box[i].position;
        }
        var followButtons = document.getElementsByClassName('team_button_text');
        for (var _i = 0; _i < followButtons.length; ++_i) {
            followButtons[_i].innerText = text.team.button;
        }
    }
}

fillText(textObject);
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