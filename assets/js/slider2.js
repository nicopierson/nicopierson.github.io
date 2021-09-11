// create pager list items
var sliderImage2 = $('.slider__images-image2');

sliderImage2.each(function (index) {
    $('.js__slider__pagers2').append('<li>'+(index+1)+'</li>');
});

// set up vars
var sliderPagers2       = 'ol.js__slider__pagers2 li',
    sliderPagersActive2 = '.js__slider__pagers2 li.active',
    sliderImages2       = '.js__slider__images2',
    sliderImagesItem2   = '.slider__images-item2',
    sliderControlNext2  = '.slider__control--next2',
    sliderControlPrev2  = '.slider__control--prev2',
    sliderSpeed2        = 5000,
    lastElem2           = $(sliderPagers2).length-1,
    sliderTarget2;

// add css heigt to slider images list
function checkImageHeight2() {
    var sliderHeight = $('.slider__images-image2:visible').height(); 
    $(sliderImages2).css('height', sliderHeight+'px');
};

sliderImage2.on('load', function() {
    checkImageHeight2();
    $(sliderImages2).addClass('loaded')
});
$(window).resize(function(){
    checkImageHeight2();
});

// set up first slide
$(sliderPagers2).first().addClass('active');
$(sliderImagesItem2).hide().first().show();

// transition function
function sliderResponse2() {
    $(sliderImagesItem2).fadeOut(300).eq(sliderTarget2).fadeIn(300);
    $(sliderPagers2).removeClass('active').eq(sliderTarget2).addClass('active');
}

// pager controls
$(sliderPagers2).on('click', function() {
    if ( !$(this).hasClass('active') ) {
        sliderTarget2 = $(this).index();
        sliderResponse2();
        resetTiming2();
    }
});

// next/prev controls
$(sliderControlNext2).on('click', function() {
    sliderTarget2 = $(sliderPagersActive2).index();
    sliderTarget2 === lastElem2 ? sliderTarget2 = 0 : sliderTarget2 = sliderTarget2+1;
    sliderResponse2();
    resetTiming2();
});
$(sliderControlPrev2).on('click', function() {
    sliderTarget2 = $(sliderPagersActive2).index();
    lastElem2 = $(sliderPagers2).length-1;
    sliderTarget2 === 0 ? sliderTarget2 = lastElem2 : sliderTarget2 = sliderTarget2-1;
    sliderResponse2();
    resetTiming2();
});

// slider timing
function sliderTiming2() {
    sliderTarget2 = $(sliderPagersActive2).index();
    sliderTarget2 === lastElem2 ? sliderTarget2 = 0 : sliderTarget2 = sliderTarget2+1;
    sliderResponse2();
}

// slider autoplay
var timingRun2 = setInterval(function() {
    sliderTiming2();
}, sliderSpeed2);

function resetTiming2() {
    clearInterval(timingRun2);
    timingRun2 = setInterval(function() {
      sliderTiming2();
    }, sliderSpeed2);
}