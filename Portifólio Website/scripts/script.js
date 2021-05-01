// Quando o document(html) estiver pronto execute uma função
// function ready(callback) {
//     // In case the document is already rendered
//     if(document.readyState === "complete") callback()
//     else if(document.addEventListener) document.addEventListener('DOMContentLoaded', callback)
// }

// ready(function() {
//     // Executando uma função para verificar certo ponto do scroll da janela/viewport
//     if (window.scrollY > 20) {
//         document.querySelector(".navbar").classList.add("sticky")
//         console.log("OI")
//     } else {
//         document.querySelector(".navbar").classList.remove("sticky")
//     }
// })

/* ===== JQuery ===== */
$(document).ready(function() {
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        }
    });

    /* Toggle Menu/Navbar Script */
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
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



