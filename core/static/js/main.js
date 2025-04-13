(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();




    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $(document).ready(function () {
        if ($.fn.counterUp) {
            $('.counter').counterUp({
                delay: 10,
                time: 2000
            });
        } else {
            console.error("CounterUp plugin is not loaded!");
        }
    });
    


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


})(jQuery);

(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Initiate the wowjs (For animations)
    new WOW().init();

    // Navbar Toggle for Mobile
    document.addEventListener("DOMContentLoaded", function () {
        let navbarToggler = document.querySelector(".navbar-toggler");
        let navbarCollapse = document.querySelector("#navbarNav");

        navbarToggler.addEventListener("click", function () {
            navbarCollapse.classList.toggle("show");
        });
    });

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");
    const text = textElement.innerText;
    textElement.innerHTML = ""; // Clear the existing text

    // Split text into individual spans
    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.style.animationDelay = `${index * 0.1}s`; // Delay for each letter
        textElement.appendChild(span);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var messageDiv = document.getElementById('form-message');

    if (messageDiv) {
        var tag = messageDiv.getAttribute('data-tag');
        var message = messageDiv.getAttribute('data-message');

        if (tag === 'success') {
            var successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
        }

        // Optional: handle error modal
        if (tag === 'error') {
            alert(message); // or show custom error modal/toast
        }
    }
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

