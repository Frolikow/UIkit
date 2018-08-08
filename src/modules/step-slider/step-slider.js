import $ from 'jquery';

class StepSlider {
  constructor(element) {
    this.$slider = $(element);
    this.initEvent();
  }

  initEvent() {
    $(this.$slider).slider({
      value: +($(this.$slider).data('default')),
      min: +($(this.$slider).data('minimum')),
      max: +($(this.$slider).data('maximum')),
      step: +($(this.$slider).data('step')),
      range: 'min',
    });
  }
}

$(document).ready(() => {
  $('.js-step-slider').each(function () {
    new StepSlider(this);
  });
});
