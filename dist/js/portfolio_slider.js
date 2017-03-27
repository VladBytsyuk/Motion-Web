'use strict';

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