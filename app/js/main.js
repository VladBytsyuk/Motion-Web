'use strict';

function textGetter() {
    return new Promise(function (resolve, reject) {
        var textRequest = new XMLHttpRequest();
        textRequest.open('GET', 'json/text.json', false);

        textRequest.onload = function () {
            if (this.status == 200) {
                resolve(JSON.parse(textRequest.responseText));
            } else {
                reject('ERROR: Request code of \"text.json\" isn\'t 200 (' + textRequest.status + ')');
            }
        };

        textRequest.onerror = function () {
            reject(new Error("Network Error"));
        };

        textRequest.send('GET');
    });
}

function fillText(text) {
    document.title = text.title;
    fillHeader(text);
    fillMerits(text);
    fillTeam(text);
    fillPortfolio(text);
    fillPricing(text);
    fillTweets(text);
    fillFooter(text);

    function fillHeader(text) {
        document.getElementById('logo_title').innerText = text.header.logo.title;
        document.getElementById('logo_subtitle').innerText = text.header.logo.subtitle;
        var menuItems = document.getElementsByClassName('navbar_menu_item');
        for (var i = 0; i < menuItems.length; ++i) {
            menuItems[i].innerText = text.header.menu[i];
        }
        var popupItems = document.getElementsByClassName('popup_item');
        for (var _i = 0; _i < popupItems.length; ++_i) {
            popupItems[_i].innerText = text.header.menu[_i];
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
        for (var _i2 = 0; _i2 < followButtons.length; ++_i2) {
            followButtons[_i2].innerText = text.team.button;
        }
    }

    function fillPortfolio(text) {
        document.getElementById('portfolio_title').innerText = text.portfolio.title;
        document.getElementById('portfolio_subtitle').innerText = text.portfolio.subtitle;
        var portfolioSlides = document.getElementsByClassName('portfolio_box');
        for (var i = 0; i < portfolioSlides.length; ++i) {
            var portfolioSlideItems = portfolioSlides[i].getElementsByClassName('portfolio_item');
            for (var j = 0; j < portfolioSlideItems.length; ++j) {
                portfolioSlideItems[j].childNodes[3].innerText = text.portfolio.box[i][j];
            }
        }
    }

    function fillPricing(text) {
        document.getElementById('pricing_info').innerText = text.pricing.info;
        var items = document.getElementsByClassName('pricing_item');
        var pricingItems = [items[0], document.getElementsByClassName('pricing_item_accent')[0], items[1]];
        for (var i = 0; i < pricingItems.length; ++i) {
            pricingItems[i].getElementsByClassName(i == 1 ? 'pricing_title_accent' : 'pricing_title')[0].innerText = text.pricing.box[i].title;
            pricingItems[i].getElementsByClassName(i == 1 ? 'pricing_subtitle_accent' : 'pricing_subtitle')[0].innerText = text.pricing.box[i].subtitle;
            var pricingOptions = pricingItems[i].getElementsByClassName('pricing_option');
            for (var j = 0; j < pricingOptions.length; ++j) {
                pricingOptions[j].innerText = text.pricing.box[i].options[j];
            }
            pricingItems[i].getElementsByClassName('pricing_dollar')[0].innerText = text.pricing.currency;
            pricingItems[i].getElementsByClassName('pricing_value')[0].innerText = text.pricing.box[i].value;
            pricingItems[i].getElementsByClassName('pricing_periodicity')[0].innerText = text.pricing.periodicity;
            pricingItems[i].getElementsByClassName(i == 1 ? 'pricing_button_accent' : 'pricing_button')[0].innerText = text.pricing.button;
        }
    }

    function fillTweets(text) {
        document.getElementById('tweets_title').innerText = text.tweets.title;
        document.getElementById('tweets_subtitle').innerText = text.tweets.subtitle;
        var tweetSlides = document.getElementsByClassName('tweets_hearth_tweet');
        for (var i = 0; i < tweetSlides.length; ++i) {
            tweetSlides[i].innerHTML = text.tweets.box[i].name + ' <span style="color:white">' + text.tweets.box[i].text + '</span> ' + text.tweets.box[i].link;
        }
    }

    function fillFooter(text) {
        document.getElementById('footer_text').innerHTML = text.footer.year + ' <span style="color: #eb4f4e">' + text.footer.name + '</span>' + text.footer.design;
        document.getElementById('footer_title').innerText = text.footer.title;
        document.getElementById('footer_email').innerText = text.footer.email;
        document.getElementById('footer_adress').innerText = text.footer.adress;
        document.getElementById('callback_btn').innerText = text.footer.button;
        document.getElementById('popup_btn').innerText = text.footer.submit;
        document.getElementById('fname').placeholder = text.footer.name_placeholder;
        document.getElementById('fnumber').placeholder = text.footer.phone_placeholder;
        document.getElementById('fadress').placeholder = text.footer.adress_placeholder;
    }
}

textGetter().then(function (json) {
    return fillText(json);
}, function (error) {
    return document.getElementById('slider_title').innerText = error;
});

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
        isOpen: isOpen,
        close: close
    };
}();

hamburger.addEventListener('click', hamburgerAction.click);
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
        prevSlide: prevSlide,
        currentSlide: currentSlide,
        slidesAmount: slidesAmount
    };
}();

portfolioArrowRight.addEventListener('click', portfolioSlider.nextSlide);
portfolioArrowLeft.addEventListener('click', portfolioSlider.prevSlide);
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
        open: open,
        close: close,
        nameField: nameField.value,
        phoneField: phoneField.value,
        adressField: adressField.value
    };
}();

callback.addEventListener('click', callbackAction.open);
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
        prevSlide: prevSlide,
        currentSlide: currentSlide,
        slidesAmount: slidesAmount
    };
}();

tweetsArrowRight.addEventListener('click', tweetsSlider.nextSlide);
tweetsArrowLeft.addEventListener('click', tweetsSlider.prevSlide);
var update = function update() {
    portfolioSlider.init();
    tweetsSlider.init();
    redrawMenu();
    hamburgerAction.close();
};

window.onload = function () {
    return update();
};

window.onresize = function () {
    return update();
};