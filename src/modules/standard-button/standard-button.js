class Button {
  constructor(element) {
    this.$element = $(element);
    this.initEvent();
  }

  initEvent() {
    this.$element.on('click', function (event) {
      const $div = $('<div>');
      const btnOffset = $(this).offset();
      const xPos = event.pageX - btnOffset.left;
      const yPos = event.pageY - btnOffset.top;
      if ($(this).hasClass('standard-button_color_blue-reverse')) {
        $div.addClass('standard-button__ripple-effect standard-button__ripple-effect_color_blue');
      } else if ($(this).hasClass('standard-button_color_red-reverse')) {
        $div.addClass('standard-button__ripple-effect standard-button__ripple-effect_color_red');
      } else {
        $div.addClass('standard-button__ripple-effect standard-button__ripple-effect_color_white');
      }
      $div.css({
        top: yPos,
        left: xPos,
      });
      $div.appendTo(this);

      window.setTimeout(() => { $div.remove(); }, 500);
    });
  }
}

$(document).ready(() => {
  $('.js-standard-button').each(function () {
    new Button(this);
  });
});
