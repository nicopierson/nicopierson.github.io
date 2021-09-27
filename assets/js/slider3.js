// create pager list items
var sliderImage3 = $('.slider__images-image3');

sliderImage3.each(function (index) {
    $('.js__slider__pagers3').append('<li>'+(index+1)+'</li>');
});

// set up vars
var sliderPagers3       = 'ol.js__slider__pagers3 li',
    sliderPagersActive3 = '.js__slider__pagers3 li.active',
    sliderImages3       = '.js__slider__images3',
    sliderImagesItem3   = '.slider__images-item3',
    sliderControlNext3  = '.slider__control--next3',
    sliderControlPrev3  = '.slider__control--prev3',
    sliderSpeed3        = 5000,
    lastElem3           = $(sliderPagers3).length-1,
    sliderTarget3;

// add css height to slider images list
function checkImageHeight3() {
    var sliderHeight = $('.slider__images-image3:visible').height(); 
    $(sliderImages3).css('height', sliderHeight+'px');
};

sliderImage3.on('load', function() {
    checkImageHeight3();
    $(sliderImages3).addClass('loaded')
});
$(window).resize(function(){
    checkImageHeight3();
});

// set up first slide
$(sliderPagers3).first().addClass('active');
$(sliderImagesItem3).hide().first().show();

// transition function
function sliderResponse3() {
    $(sliderImagesItem3).fadeOut(300).eq(sliderTarget3).fadeIn(300);
    $(sliderPagers3).removeClass('active').eq(sliderTarget3).addClass('active');
}

// pager controls
$(sliderPagers3).on('click', function() {
    if ( !$(this).hasClass('active') ) {
        sliderTarget3 = $(this).index();
        sliderResponse3();
        resetTiming3();
    }
});

// next/prev controls
$(sliderControlNext3).on('click', function() {
    sliderTarget3 = $(sliderPagersActive3).index();
    sliderTarget3 === lastElem3 ? sliderTarget3 = 0 : sliderTarget3 = sliderTarget3+1;
    sliderResponse3();
    resetTiming3();
});
$(sliderControlPrev3).on('click', function() {
    sliderTarget3 = $(sliderPagersActive3).index();
    lastElem3 = $(sliderPagers3).length-1;
    sliderTarget3 === 0 ? sliderTarget3 = lastElem3 : sliderTarget3 = sliderTarget3-1;
    sliderResponse3(sliderTarget3);
    resetTiming3();
});

// slider timing
function sliderTiming3() {
    sliderTarget3 = $(sliderPagersActive3).index();
    sliderTarget3 === lastElem3 ? sliderTarget3 = 0 : sliderTarget3 = sliderTarget3+1;
    sliderResponse3();
}

// slider autoplay
var timingRun3 = setInterval(function() {
    sliderTiming3();
}, sliderSpeed3);

function resetTiming3() {
    clearInterval(timingRun3);
    timingRun3 = setInterval(function() {
      sliderTiming3();
    }, sliderSpeed3);
}