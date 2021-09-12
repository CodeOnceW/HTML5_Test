window.addEventListener('load', function() {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000, // 间隔时间
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination', // 分页器
            clickable: true, // 点击是否控制切换
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})