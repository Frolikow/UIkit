/* eslint-disable no-underscore-dangle */
class Button {
  constructor(element) {
    this.$button = $(element);
    this._initEventListeners();
  }

  _initEventListeners() {
    this.$button.on('click', this._handleButtonClick.bind(this));
  }

  _handleButtonClick(e) {
    const $div = $('<div>');
    const btnOffset = $(this.$button).offset();
    const xPos = e.pageX - btnOffset.left;
    const yPos = e.pageY - btnOffset.top;

    if ($(this.$button).hasClass('standard-button_color_blue-reverse')) {
      $div.addClass('standard-button__ripple-effect standard-button__ripple-effect_color_blue');
    } else if ($(this.$button).hasClass('standard-button_color_red-reverse')) {
      $div.addClass('standard-button__ripple-effect standard-button__ripple-effect_color_red');
    } else {
      $div.addClass('standard-button__ripple-effect standard-button__ripple-effect_color_white');
    }

    $div.css({
      top: yPos,
      left: xPos,
    });
    $div.appendTo(this.$button);

    window.setTimeout(() => { $div.remove(); }, 500);
  }
}

$(document).ready(() => {
  $('.js-standard-button').each(function () {
    new Button(this);
  });
});
