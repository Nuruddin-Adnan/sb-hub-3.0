// world clock slider
const clockSwiper = new Swiper(".clockSwiper", {
    slidesPerView: 3,
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

// trend video
const trendVideo = new Swiper(".trendVideo", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// trend podcast
const trendpodcast = new Swiper(".trendpodcast", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// nav-tab slider
const navTab = new Swiper(".navTabSwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 0,
        }
    },
    navigation: {
        nextEl: ".nav-tab-next",
        prevEl: ".nav-tab-prev",
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