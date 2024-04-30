(function () {
    "use strict";

    // Sticky Navbar
    window.addEventListener('scroll', function () {
        if (window.scrollY > 40) {
            document.querySelector('.navbar').classList.add('sticky-top');
            console.log("vivekisgr8")
        } else {
            document.querySelector('.navbar').classList.remove('sticky-top');
        }
    });

    // Dropdown on mouse hover
    // function toggleNavbarMethod() {
    //     if (window.innerWidth > 992) {
    //         document.querySelectorAll('.navbar .dropdown').forEach(function (dropdown) {
    //             dropdown.addEventListener('mouseover', function () {
    //                 dropdown.querySelector('.dropdown-toggle').click();
    //             });
    //             dropdown.addEventListener('mouseout', function () {
    //                 dropdown.querySelector('.dropdown-toggle').click();
    //                 dropdown.querySelector('.dropdown-toggle').blur();
    //             });
    //         });
    //     } else {
    //         document.querySelectorAll('.navbar .dropdown').forEach(function (dropdown) {
    //             dropdown.removeEventListener('mouseover', function () {});
    //             dropdown.removeEventListener('mouseout', function () {});
    //         });
    //     }
    // }
    toggleNavbarMethod();
    // window.addEventListener('resize', toggleNavbarMethod);

    // Modal Video
    // document.addEventListener('DOMContentLoaded', function () {
    //     var $videoSrc;
    //     document.querySelectorAll('.btn-play').forEach(function (btn) {
    //         btn.addEventListener('click', function () {
    //             $videoSrc = this.getAttribute("data-src");
    //         });
    //     });

    //     document.querySelector('#videoModal').addEventListener('shown.bs.modal', function () {
    //         document.querySelector("#video").setAttribute('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    //     });

    //     document.querySelector('#videoModal').addEventListener('hide.bs.modal', function () {
    //         document.querySelector("#video").setAttribute('src', $videoSrc);
    //     });
    // });

    // Back to top button
    // window.addEventListener('scroll', function () {
    //     if (window.scrollY > 100) {
    //         document.querySelector('.back-to-top').style.display = 'block';
    //     } else {
    //         document.querySelector('.back-to-top').style.display = 'none';
    //     }
    // });
    // document.querySelector('.back-to-top').addEventListener('click', function () {
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // });

    // Product carousel
    // $(".product-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     margin: 45,
    //     dots: false,
    //     loop: true,
    //     nav: true,
    //     navText: [
    //         '<i class="bi bi-arrow-left"></i>',
    //         '<i class="bi bi-arrow-right"></i>'
    //     ],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         768: {
    //             items: 2
    //         },
    //         992: {
    //             items: 3
    //         },
    //         1200: {
    //             items: 4
    //         }
    //     }
    // });

    // Team carousel
    // $(".team-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     margin: 45,
    //     dots: false,
    //     loop: true,
    //     nav: true,
    //     navText: [
    //         '<i class="bi bi-arrow-left"></i>',
    //         '<i class="bi bi-arrow-right"></i>'
    //     ],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         768: {
    //             items: 2
    //         },
    //         992: {
    //             items: 3
    //         },
    //         1200: {
    //             items: 4
    //         }
    //     }
    // });

    // Testimonials carousel
    // $(".testimonial-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1000,
    //     items: 1,
    //     dots: false,
    //     loop: true,
    //     nav: true,
    //     navText: [
    //         '<i class="bi bi-arrow-left"></i>',
    //         '<i class="bi bi-arrow-right"></i>'
    //     ],
    // });

})();
