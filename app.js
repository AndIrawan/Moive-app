$(document).ready(() => {
    $('#mobile-menu').click(() => {
        $('#mobile-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })
})

let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

$('#latest-carousel').owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: navText,
    autoplay: true,
    autoplayHoverPause: true
})

$('#new-movie-slide').owlCarousel({
    items: 2,
    dots: false,
    nav: true,
    navText: navText,
    margin: 15,
    responsive: {
        500: {
            items: 2
        },
        1280: {
            items: 4
        },
        1600: {
            items: 6
        }
    }
})

$('.tv_slide').owlCarousel({
    items: 2,
    dots: false,
    nav: true,
    navText: navText,
    margin: 15,
    responsive: {
        500: {
            items: 2
        },
        1280: {
            items: 4
        },
        1600: {
            items: 6
        }
    }
})