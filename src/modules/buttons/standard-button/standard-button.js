import $ from 'jquery';

class Button {
  constructor(element) {
    this.$element = element;
    this.eventInit();
    console.log('constructor');
  }

  eventInit() {
    $(this.$element)
      .on('click', function (event) {
        console.log('click');
        const $div = $('<div>');

        $div.addClass('standard-button-element__ripple-effect');
        $div.css({
          top: event.pageY,
          left: event.pageX,
        });
        $div.appendTo(this);

        window.setTimeout(() => {
          $div.remove();
        }, 1000);
      });
  }
}

$(document).ready(() => {
  $('.standard-button-element').each(function () {
    new Button(this);
  });
});
