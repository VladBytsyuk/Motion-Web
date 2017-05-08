// const portfolioArrowRight = angular.element('portfolio_next');
// const portfolioArrowLeft = angular.element('portfolio_prev');

// const portfolioSlider = new function() {
//     const slider = angular.element('portfolio_slider');
//     const slideHolder = angular.element('portfolio_holder');
//     const slides = slider.getElementsByClassName('portfolio_box');
//     const pages = document.getElementsByClassName('portfolio_pages_item');
//     const slidesAmount = slides.length;
//     let currentSlide = 0;

//     slides[currentSlide].style.opacity = 1;
//     pages[currentSlide].classList.add('portfolio_pages_item_highlighted');

//     function init(event) {
//         slideHolder.style.height = slides[currentSlide].clientHeight + 'px';
//     }
//     init(undefined);


//     function nextSlide() {
//         slides[currentSlide].style.opacity = 0;
//         pages[currentSlide].classList.remove('portfolio_pages_item_highlighted');
//         currentSlide = currentSlide < slidesAmount - 1 ? currentSlide + 1 : 0;
//         slides[currentSlide].style.opacity = 1;
//         pages[currentSlide].classList.add('portfolio_pages_item_highlighted');
//         init(undefined);
//     }

//     function prevSlide() {
//         slides[currentSlide].style.opacity = 0;
//         pages[currentSlide].classList.remove('portfolio_pages_item_highlighted');
//         currentSlide = currentSlide > 0 ? currentSlide - 1 : slidesAmount - 1;
//         slides[currentSlide].style.opacity = 1;
//         pages[currentSlide].classList.add('portfolio_pages_item_highlighted');
//         init(undefined);
//     }

//     return {
//         init: init,
//         nextSlide: nextSlide,
//         prevSlide: prevSlide,
//         currentSlide: currentSlide,
//         slidesAmount: slidesAmount
//     }
// };

// portfolioArrowRight.addEventListener('click', portfolioSlider.nextSlide);
// portfolioArrowLeft.addEventListener('click', portfolioSlider.prevSlide);