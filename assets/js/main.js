$(document).ready(function () {

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    })
    wow.init();


    $(".mask-phone").mask("+ 7 (A00) 000 - 00 - 00", {
        clearIfNotMatch: true,
        'translation': {A: {pattern: /[1,2,3,4,5,6,9]/}, 0: {pattern: /[0-9]/}}
    });

    $('.product-info__title').on('click', function(){
        $(this).toggleClass('open');
        $(this).parent().find('.product-info__text').toggleClass('hidden');
    });

    $('.product-top__dec').on('click', function(){
        var input = $(this).parent().find('input');
        var currentVal = parseInt(input.val());
        if( (currentVal - 1) < 1 ) {
            input.val(1);
        }
        else {
            input.val(currentVal - 1);
        }
    });

    $('.product-top__inc').on('click', function(){
        var input = $(this).parent().find('input');
        var currentVal = parseInt(input.val());
        input.val(currentVal + 1);
    });

    const reviewsSlider = new Swiper('.reviews-slider .swiper-container', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.reviews-slider-button-next',
            prevEl: '.reviews-slider-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
    });


});