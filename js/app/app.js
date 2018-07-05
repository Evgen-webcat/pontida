$(document).ready(function () {
    'use strict'

    $('.main-menu-button').click(function (event) {
        event.preventDefault();
        $(this).toggleClass('button-menu-open');
        $('.main-menu').slideToggle();
    });

    $('.phone-input').mask('+375(99) 999-99-99');

    var slider = document.getElementById('slick-slider');
    if (slider) {
        $('.slick-slider').slick({
            autoplay: true,
            dots: true,
            appendDots: $('.dots'),
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
    }]
        });
    }

    var productSlider = document.getElementById('product_slider');
    if (productSlider) {
        $('.product_slider').slick({
            dots: true,
            fade: true,
            asNavFor: '.product_slider-nav'
        });
        $('.product_slider-nav').slick({
            slidesToShow: 4,
            asNavFor: '.product_slider',
            focusOnSelect: true
        });
    }

    var scrollHere = document.getElementById('scrollHere');

    if (scrollHere) {
        $('.mouse-button').click(function (event) {
            event.preventDefault();
            var scrollTo = $('#scrollHere').offset().top;
            $('html, body').animate({
                scrollTop: scrollTo
            }, 500);
        });
    }
});
