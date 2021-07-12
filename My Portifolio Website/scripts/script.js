/* ===== JQuery ===== */
$(document).ready(function() {
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        }

        // Para aparecer o Button Back Up
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show")
        } else {
            $('.scroll-up-btn').removeClass("show")
        }

    });

    /* Slide-up script */
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0})
    })

    /* Toggle Menu/Navbar Script */
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    })

    /* Typing animation script (Escrita animada) */
    var typed = new Typed(".typing", {
        strings: ["Developer", "Programmer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Programmer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    /* Owl carousel script */
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
})