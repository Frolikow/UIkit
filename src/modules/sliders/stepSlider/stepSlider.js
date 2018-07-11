import $ from 'jquery';

$(() => {
  const stepSlider = document.getElementsByClassName('step-slider')[0];
  $('.step_Slider').slider({
    value: +stepSlider.getAttribute('data-default'),
    min: +stepSlider.getAttribute('data-minimum'),
    max: +stepSlider.getAttribute('data-maximum'),
    step: +stepSlider.getAttribute('data-step'),
    range: 'min',
  });
});
