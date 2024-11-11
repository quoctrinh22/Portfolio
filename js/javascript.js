var loader = document.getElementById("loader");
window.addEventListener('load', function (load) {
    window.removeEventListener('load', load, false);
    setTimeout(function () { loader.style.display = 'none' }, 2000);
}, false);

$(document).ready(function () {
    $('#bars').click(function () {
        $('.menu').slideToggle('show');
    });

    $('.menu').click(function () {
        if ($(window).width() <= 992) {
            $('.menu').hide();
        }
    });

    $(window).resize(function () {
        if ($(window).width() > 992) {
            $('.menu').removeAttr('style');
        } else {
            $('.menu').hide();
        }
    });

    if ($(window).width() > 992) {
        $('.menu').removeAttr('style');
    }
})

