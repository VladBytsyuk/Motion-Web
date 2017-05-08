// const tweetsArrowRight = angular.element('tweets_next');
// const tweetsArrowLeft = angular.element('tweets_prev');

// const tweetsSlider = new function() {
//     const slideHolder = angular.element('tweets_hearth');
//     const slides = slideHolder.getElementsByClassName('tweets_hearth_tweet');
//     const slidesAmount = slides.length;
//     let currentSlide = 0;
//     slides[currentSlide].style.opacity = 1;
//     init(undefined);

//     function init(event) {
//         slideHolder.style.width = slides[currentSlide].clientWidth + 'px';
//         slideHolder.style.height =  slides[currentSlide].clientHeight + 'px';
//     }

//     function nextSlide() {
//         slides[currentSlide].style.opacity = 0;
//         currentSlide = currentSlide < slidesAmount - 1 ? currentSlide + 1 : 0;
//         slides[currentSlide].style.opacity = 1;
//     }

//     function prevSlide() {
//         slides[currentSlide].style.opacity = 0;
//         currentSlide = currentSlide > 0 ? currentSlide - 1 : slidesAmount - 1;
//         slides[currentSlide].style.opacity = 1;
//     }

//     return {
//         init: init,
//         nextSlide: nextSlide,
//         prevSlide: prevSlide,
//         currentSlide: currentSlide,
//         slidesAmount: slidesAmount
//     }
// };

// tweetsArrowRight.addEventListener('click', tweetsSlider.nextSlide);
// tweetsArrowLeft.addEventListener('click', tweetsSlider.prevSlide);