var portfolioArrowRight = document.getElementById('portfolio_next');
var portfolioArrowLeft = document.getElementById('portfolio_prev');

var portfolioSlider = new function() {
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
    }

    function prevSlide() {
        slides[currentSlide].style.opacity = 0;
        pages[currentSlide].classList.remove('portfolio_pages_item_highlighted');
        currentSlide = currentSlide > 0 ? currentSlide - 1 : slidesAmount - 1;
        slides[currentSlide].style.opacity = 1;
        pages[currentSlide].classList.add('portfolio_pages_item_highlighted');
    }

    return {
        init: init,
        nextSlide: nextSlide,
        prevSlide: prevSlide
    }
};

portfolioArrowRight.addEventListener('click', portfolioSlider.nextSlide);
portfolioArrowLeft.addEventListener('click', portfolioSlider.prevSlide);



var tweetsArrowRight = document.getElementById('tweets_next');
var tweetsArrowLeft = document.getElementById('tweets_prev');

var tweetsSlider = new function() {
    var slideHolder = document.getElementById('tweets_hearth');
    var slides = slideHolder.getElementsByClassName('tweets_hearth_tweet');
    var slidesAmount = slides.length;
    var currentSlide = 0;
    slides[currentSlide].style.opacity = 1;
    init(undefined);

    function init(event) {
        slideHolder.style.width = slides[currentSlide].clientWidth + 'px';
        slideHolder.style.height =  slides[currentSlide].clientHeight + 'px';
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
    }
};

window.onresize = function() {
	portfolioSlider.init();
	tweetsSlider.init();
}
tweetsArrowRight.addEventListener('click', tweetsSlider.nextSlide);
tweetsArrowLeft.addEventListener('click', tweetsSlider.prevSlide);
