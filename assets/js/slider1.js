// create pager list items
var sliderImage1 = $('.slider__images-image1');

sliderImage1.each(function (index) {
    $('.js__slider__pagers1').append('<li>'+(index+1)+'</li>');
});

// set up vars
var sliderPagers1       = 'ol.js__slider__pagers1 li',
    sliderPagersActive1 = '.js__slider__pagers1 li.active',
    sliderImages1       = '.js__slider__images1',
    sliderImagesItem1   = '.slider__images-item1',
    sliderControlNext1  = '.slider__control--next1',
    sliderControlPrev1  = '.slider__control--prev1',
    sliderSpeed1        = 5000,
    lastElem1           = $(sliderPagers1).length-1,
    sliderTarget1;

// add css height to slider images list
function checkImageHeight1() {
    var sliderHeight1 = $('.slider__images-image1:visible').height(); 
    $(sliderImages1).css('height', sliderHeight1+'px');
};

sliderImage1.on('load', function() {
    checkImageHeight1();
    $(sliderImages1).addClass('loaded')
});
$(window).resize(function(){
    checkImageHeight1();
});

// set up first slide
$(sliderPagers1).first().addClass('active');
$(sliderImagesItem1).hide().first().show();

// transition function
function sliderResponse1() {
    $(sliderImagesItem1).fadeOut(300).eq(sliderTarget1).fadeIn(300);
    $(sliderPagers1).removeClass('active').eq(sliderTarget1).addClass('active');
}

// pager controls
$(sliderPagers1).on('click', function() {
    if ( !$(this).hasClass('active') ) {
        sliderTarget1 = $(this).index();
        sliderResponse1();
        resetTiming1();
    }
});

// next/prev controls
$(sliderControlNext1).on('click', function() {
    sliderTarget1 = $(sliderPagersActive1).index();
    sliderTarget1 === lastElem1 ? sliderTarget1 = 0 : sliderTarget1 = sliderTarget1+1;
    sliderResponse1();
    resetTiming1();
});
$(sliderControlPrev1).on('click', function() {
    sliderTarget1 = $(sliderPagersActive1).index();
    lastElem1 = $(sliderPagers1).length-1;
    sliderTarget1 === 0 ? sliderTarget1 = lastElem1 : sliderTarget1 = sliderTarget1-1;
    sliderResponse1();
    resetTiming1();
});

// slider timing
function sliderTiming1() {
    sliderTarget1 = $(sliderPagersActive1).index();
    sliderTarget1 === lastElem1 ? sliderTarget1 = 0 : sliderTarget1 = sliderTarget1+1;
    sliderResponse1();
}

// slider autoplay
var timingRun1 = setInterval(function() {
    sliderTiming1();
}, sliderSpeed1);

function resetTiming1() {
    clearInterval(timingRun1);
    timingRun1 = setInterval(function() {
      sliderTiming1();
    }, sliderSpeed1);
}