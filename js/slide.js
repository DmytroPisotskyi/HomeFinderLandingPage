const sliders = document.querySelectorAll('.slider__item');
const prevBtn = document.querySelector('.btn-sld-prev');
const nextBtn = document.querySelector('.btn-sld-next');
let currentSlideIndex = 0;

function showSlide() {
    sliders[currentSlideIndex].classList.add('active_slider');
};

function hideSlide() {
    sliders[currentSlideIndex].classList.remove('active_slider');
}

function nextSlide() {
    hideSlide();
    currentSlideIndex ++;

    if (currentSlideIndex > sliders.length - 1 ) {
        currentSlideIndex = 0;
    }
    showSlide();
};


function prevSlide() {
    hideSlide();
    currentSlideIndex --;

    if (currentSlideIndex < 0) {
        currentSlideIndex = sliders.length - 1;
    }
    showSlide();
};


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


showSlide();
