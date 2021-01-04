$(function () {
    // Typed js start
    var typed = new Typed('.type', {
        strings: [
            'Designer',
            'Developer',
            'Freelancer'
        ],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true,
    });

    // Counter Up  js

    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });


    //Slider Js start

    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            items: 2,
            margin: 20,
            loop: true,
            responsive: {
                0: {
                    items: 1,
                    loop: true
                },
                576: {
                    items: 1,
                    loop: true
                },
                768: {
                    items: 1,
                    loop: true
                },
                992: {
                    items: 2,
                    loop: true
                },
                1200: {
                    items: 2,
                    loop: true
                }
            }
        });
    });

    //smooth scrolling js Scroll donw 

    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });


    // Menu fix js

    var navoff = $('.main_menu').offset().top;

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }

    });


    //  mixitup start  //
    var containerEl = document.querySelector('.img_mixit');

    var mixer = mixitup(containerEl);




    //Window scrolling js
    $('.btop').click(function () {
        $(' html, body').animate({
            scrollTop: 0,
        }, 5000);
    });

    $(window).scroll(function () {
        var btn_scroll = $(this).scrollTop();

        if (btn_scroll > 250) {
            $('.btop').fadeIn();
        } else {
            $('.btop').fadeOut();
        }
    });








});
