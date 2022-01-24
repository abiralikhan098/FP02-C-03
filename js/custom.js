/*===== NAVBAR =====*/
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.navbar').addClass('black');
    } else {
        $('.navbar').removeClass('black');
    }
});

/*===== navbar mobile view =====*/

$('.navbar-toggler').click(function () {
    $('.navbar').toggleClass('click_nav');
});


/*===== SMOOTH SCROLL =====*/
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});


/*===== BACK TO TOP =====*/

var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});
