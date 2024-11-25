/* INÍCIO AJUSTES SLICK CARROSSEL PRINCIPAL */

$(document).ready(function(){
    $('.carousel').slick({
        arrows: true,
        prevArrow: `<span class="material-symbols-outlined slick-arrow prev">arrow_back_ios</span>`,
        nextArrow: `<span class="material-symbols-outlined slick-arrow next">arrow_forward_ios</span>`,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
});

/* FIM AJUSTES SLICK CARROSSEL PRINCIPAL */

/* INÍCIO AJUSTES MUDANÇA DE COR DO MENU NO SCROLL */

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#top-bar').addClass('scrolled');
        } else {
            $('#top-bar').removeClass('scrolled');
        }
    });
});

/* FIM AJUSTES MUDANÇA DE COR DO MENU NO SCROLL */