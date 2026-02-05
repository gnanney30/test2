// Featured Slider
let featuredSlideIndex = 0;
let featuredInterval;

function showFeaturedSlide(n) {
    const slides = document.querySelectorAll('.slide-featured');
    const dots = document.querySelectorAll('.dot-featured');
    
    if (n >= slides.length) { featuredSlideIndex = 0; }
    if (n < 0) { featuredSlideIndex = slides.length - 1; }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[featuredSlideIndex].classList.add('active');
    dots[featuredSlideIndex].classList.add('active');
}

function changeFeaturedSlide(n) {
    clearInterval(featuredInterval);
    featuredSlideIndex += n;
    showFeaturedSlide(featuredSlideIndex);
    startFeaturedAutoPlay();
}

function currentFeaturedSlide(n) {
    clearInterval(featuredInterval);
    featuredSlideIndex = n;
    showFeaturedSlide(featuredSlideIndex);
    startFeaturedAutoPlay();
}

function startFeaturedAutoPlay() {
    featuredInterval = setInterval(() => {
        featuredSlideIndex++;
        showFeaturedSlide(featuredSlideIndex);
    }, 8000);
}

// Banner Slider
let bannerSlideIndex = 0;
let bannerInterval;

function showBannerSlide(n) {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.dot-banner');
    
    if (n >= slides.length) { bannerSlideIndex = 0; }
    if (n < 0) { bannerSlideIndex = slides.length - 1; }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[bannerSlideIndex].classList.add('active');
    dots[bannerSlideIndex].classList.add('active');
}

function changeBannerSlide(n) {
    clearInterval(bannerInterval);
    bannerSlideIndex += n;
    showBannerSlide(bannerSlideIndex);
    startBannerAutoPlay();
}

function currentBannerSlide(n) {
    clearInterval(bannerInterval);
    bannerSlideIndex = n;
    showBannerSlide(bannerSlideIndex);
    startBannerAutoPlay();
}

function startBannerAutoPlay() {
    bannerInterval = setInterval(() => {
        bannerSlideIndex++;
        showBannerSlide(bannerSlideIndex);
    }, 5000);
}

// Initialize both sliders
document.addEventListener('DOMContentLoaded', function() {
    showFeaturedSlide(featuredSlideIndex);
    showBannerSlide(bannerSlideIndex);
    startFeaturedAutoPlay();
    startBannerAutoPlay();
});
