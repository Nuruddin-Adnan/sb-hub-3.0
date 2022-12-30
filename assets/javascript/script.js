// world clock slider
const clockSwiper = new Swiper(".clockSwiper", {
    slidesPerView: 2,
    spaceBetween: 5,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 8,
            spaceBetween: 0,
        },
        1396: {
            slidesPerView: 10,
            spaceBetween: 0,
        },
    },
    navigation: {
        nextEl: ".world-clock-next",
        prevEl: ".world-clock-prev",
    },
});


// Banner slider
const bannerSwiper = new Swiper(".bannerSwiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});