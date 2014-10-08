/*!
 * Customized Javascript file
 */

/* 1. NAVBAR:
CLOSE THE NAVBAR */
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/* On scrolling, collapse the NAVBAR*/
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

/* Scrolling with JS Easing Plugin */
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/* Tooltips */

    jQuery(function ($) {
        $("a").tooltip()
    });



