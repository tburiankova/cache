import $ from 'jquery';

$('.button-prev').click(function () {
  var e = $('.slider__feature-slide.slider__feature-slide--active');

  $(e).removeClass('slider__feature-slide--active'),
    $(e).prev().addClass('slider__feature-slide--active'),
    $('.slider__feature-slide').hasClass('slider__feature-slide--active') ||
      $('.slider__feature-slide:last').addClass(
        'slider__feature-slide--active'
      );
});

$('.button-next').click(function () {
  var e = $('.slider__feature-slide.slider__feature-slide--active');

  $(e).removeClass('slider__feature-slide--active'),
    $(e).next().addClass('slider__feature-slide--active'),
    $('.slider__feature-slide').hasClass('slider__feature-slide--active') ||
      $('.slider__feature-slide:first').addClass(
        'slider__feature-slide--active'
      );
});
