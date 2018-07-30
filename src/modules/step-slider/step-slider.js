import $ from 'jquery';

$(() => {
  const stepSliderData = document.getElementsByClassName('js-step-slider-element')[0];
  $('.js-step-slider').slider({
    value: +stepSliderData.getAttribute('data-default'),
    min: +stepSliderData.getAttribute('data-minimum'),
    max: +stepSliderData.getAttribute('data-maximum'),
    step: +stepSliderData.getAttribute('data-step'),
    range: 'min',
  });
});
