const swiper1 = new Swiper('.channel__slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
        nextEl: '.channel__button_next',
        prevEl: '.channel__button_prev',
    },
});

const swiper2 = new Swiper('.recommended__slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
        nextEl: '.recommended__button_next',
        prevEl: '.recommended__button_prev',
    },
});

const swiper3 = new Swiper('.food-drink__slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
        nextEl: '.food-drink__button_next',
        prevEl: '.food-drink__button_prev',
    },
});