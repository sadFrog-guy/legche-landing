import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper(".swiper", {
    slidesPerView: "5.4",
    centeredSlides: true,
    centeredSlidesBounds: true,
    slideToClickedSlide: true,
    scrollbar: {
        draggable: true,
        dragSize: 30,
    },
    speed: 800,
    allowLongSlides: false,
    mousewheel: true,
    initialSlide: 3
});