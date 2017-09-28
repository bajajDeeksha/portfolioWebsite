//displaying stars
$.fn.stars = function() {
    return $(this).each(function() {
        var rating = $(this).data("rating");
        var numStars = $(this).data("numStars");
        var fullStar = new Array(Math.floor(rating + 1)).join('<i class="fa fa-color fa-star"></i>');
        var halfStar = ((rating%1) !== 0) ? '<i class="fa fa-star-half-empty"></i>': '';
        var noStar = new Array(Math.floor(numStars + 1 - rating)).join('<i class="fa fa-uncolor fa-star"></i>');
        $(this).html(fullStar + halfStar + noStar);
    });
}
$( document ).ready(function() {
            $('span.stars').stars();
        });


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
