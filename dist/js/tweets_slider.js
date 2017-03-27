'use strict';

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