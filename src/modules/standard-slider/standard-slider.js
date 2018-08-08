import $ from 'jquery';

class StandardSlider {
  constructor(element) {
    this.$slider = $(element);
    this.$handle = $(this.$slider).find('.js-standard-slider_custom-handle');
    this.initEvent();
  }

  initEvent() {
    $(this.$slider).slider({
      animate: true,
      min: +($(this.$slider).data('minimum')),
      value: +($(this.$slider).data('default')),
      max: +($(this.$slider).data('maximum')),
      create: () => {
        $(this.$handle).text($(this.$slider).slider('value'));
      },
      slide: (_event, ui) => {
        $(this.$handle).text(ui.value);
      },
    });
  }
}

$(document).ready(() => {
  $('.js-standard-slider').each(function () {
    new StandardSlider(this);
  });
});
