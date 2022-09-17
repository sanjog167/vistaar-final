// Trending Product--------------------------------------------
$(document).ready(function () {
    $('#responsive-trending').lightSlider({
        item: 5,
        loop: false,
        slideMove: 2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        controls: true,
        responsive: [{
                breakpoint: 900,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            }
        ]
    });
});

//  Featured Product
$(document).ready(function () {
    var slider = $("#featured-slider").lightSlider({
        controls: false,
        loop: true,
        item: 2,
        pager: false,
        slideMargin: 0,
        responsive: [{
                breakpoint: 900,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1,
                    pager: true
                }
            }
        ]
    });

    $('.slideControls .slidePrev').click(function () {
        slider.goToPrevSlide();
    });

    $('.slideControls .slideNext').click(function () {
        slider.goToNextSlide();
    });
});

// Product Page Image Slider--------------------------------------------
$(document).ready(function () {
    $('#product-slider').lightSlider({
        item: 1,
        loop: false,
        slideMove: 2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        controls: false
    });
});

// Image Show
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(200)
        };

        reader.readAsDataURL(input.files[0]);
    }
}