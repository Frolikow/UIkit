import $ from 'jquery';

class StepSlider {
  constructor(element) {
    this.$slider = $(element);
    this.value = +(this.$slider.data('default'));
    this.min = +(this.$slider.data('minimum'));
    this.max = +(this.$slider.data('maximum'));
    this.step = +(this.$slider.data('step'));
    this.initEvent();
  }

  initEvent() {
    this.$slider.slider({
      value: this.value,
      min: this.min,
      max: this.max,
      step: this.step,
      range: 'min',
    });

    const $scale = this.$slider.next();
    let scaleValue = this.min;
    while (scaleValue <= this.max) {
      $scale.append(`<div class='step-slider__value'> ${scaleValue}</div>`);
      scaleValue += this.step;
    }
  }
}

$(document).ready(() => {
  $('.js-step-slider').each(function () {
    new StepSlider(this);
  });
});
