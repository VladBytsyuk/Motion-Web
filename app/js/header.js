var menu = document.getElementById('header_menu');
var items = menu.getElementsByClassName('navbar_menu_item');
var header = document.getElementById('header');
var hamburger = document.getElementById('ham');

function redrawMenu() {
    showAll();
    hideUnnecessary();
}

function showAll() {
    var j;
    for (j = 1; j < items.length; ++j) {
        items[items.length - j].style.display = 'block';
    }
}

function hideUnnecessary() {
    if (header.clientWidth < 1000) {
        items[items.length - 1].style.display = 'none';
        hamburger.style.visibility = 'visible';
    } else {
        hamburger.style.visibility = 'hidden';
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

redrawMenu();

var hamburgerAction = new function() {
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
        click : click,
        close: close
    }
};

hamburger.addEventListener('click', hamburgerAction.click);