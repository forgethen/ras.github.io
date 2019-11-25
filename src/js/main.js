'use strict';
$(document).ready(function() {
  console.log('go go go');
  $('.burger').click(function() {
    $(this).toggleClass('show');
    $('header nav').toggleClass('show');
  })
  $('.slick.slider__top').slick({
    slideToShow: 1,
    slideToScroll: 1,
    arrows: false,
    dots: true,
    fade: false,
    lazyLoad: 'ondemand',
    infinite: true,
    pauseOnDotsHover: true,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 250,
    prevArrow: '<div class="arrow prev"></div>',
    nextArrow: '<div class="arrow next"></div>',
  });
  $('.slick.slider__top .slide').each(function() {
    var blur = $("<div class='blur'></div>")
    $(this).prepend(blur);
    var bgSrc = $(this).find('img').attr('src');
    $(this).find('.blur').css('background-image', 'url(' + bgSrc + '');
    console.log(bgSrc)
  });



var filtered = false;
$('.slider__projects__navigation .filter-option a').on('click',function(){
    $('.slider__projects__navigation .filter-option a').removeClass('active');
    var filter = $(this).data('btn');
    if(filter=='all'){
        $('.slider.slider__projects').slick('slickUnfilter');
        $('.slider.slider__projects').slick('slickGoTo', 0);
        filtered = true;
    }else{
        $('.slider.slider__projects').slick('slickUnfilter').slick('slickFilter','.'+filter);
        $('.slider.slider__projects').slick('slickGoTo', 0);
        filtered = true;
    }
    $(this).addClass('active');
});
$('.slider.slider__projects').slick({
  arrows:         false,
  autoplay:       false,
  autoplaySpeed:  4500,
  infinite:       true,
  pauseOnFocus:   false,
  pauseOnHover:   false,
  slidesToShow:   4,
  slidesToScroll: 1,
  centerMode: false,
  prevArrow: '<div class="arrow prev"></div>',
  nextArrow: '<div class="arrow next"></div>',
});

$('.slider.news__slider').slick({
  arrows:         false,
  autoplay:       false,
  autoplaySpeed:  4500,
  infinite:       true,
  pauseOnFocus:   false,
  pauseOnHover:   false,
  slidesToShow:   4,
  slidesToScroll: 1,
  centerMode: false,
  prevArrow: '<div class="arrow prev"></div>',
  nextArrow: '<div class="arrow next"></div>',
});
// $('.slider.slider__projects .slick-center').prev().prev().addClass('prev-center')
// $('.slider.slider__projects .slick-center').next().next().addClass('next-center')
  //------- Custom Arrows click functionality


  $('.slider.sert__slider').slick({
    arrows:         false,
    autoplay:       true,
    autoplaySpeed:  2500,
    infinite:       true,
    pauseOnFocus:   false,
    pauseOnHover:   false,
    slidesToShow:   3,
    slidesToScroll: 1,
    centerMode: false,
    prevArrow: '<div class="arrow prev"></div>',
    nextArrow: '<div class="arrow next"></div>',
  });

  $('.slider.clients__slider').slick({
    arrows:         false,
    autoplay:       true,
    autoplaySpeed:  2500,
    infinite:       true,
    pauseOnFocus:   false,
    pauseOnHover:   false,
    slidesToShow:   3,
    slidesToScroll: 1,
    centerMode: false,
    prevArrow: '<div class="arrow prev"></div>',
    nextArrow: '<div class="arrow next"></div>',
  });

  $(document).on('click', '.slider__projects__navigation .prevSlide', function() {
    $('.slider__projects').slick('slickPrev');
  });

  $(document).on('click', '.slider__projects__navigation .nextSlide', function() {
    $('.slider__projects').slick('slickNext');
  });

  $(document).on('click', '.slider-clients-navigation .prevSlide', function() {
    $('.clients__slider').slick('slickPrev');
  });

  $(document).on('click', '.slider-clients-navigation .nextSlide', function() {
    $('.clients__slider').slick('slickNext');
  });

  $(document).on('click', '.slider-serts-navigation .prevSlide', function() {
    $('.sert__slider').slick('slickPrev');
  });

  $(document).on('click', '.slider-serts-navigation .nextSlide', function() {
    $('.sert__slider').slick('slickNext');
  });

  $(document).on('click', '.slider-news-navigation .prevSlide', function() {
    $('.news__slider').slick('slickPrev');
  });

  $(document).on('click', '.slider-news-navigation .nextSlide', function() {
    $('.news__slider').slick('slickNext');
  });

});

//# sourceMappingURL=main.js.map
