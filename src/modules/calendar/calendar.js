import $ from 'jquery';

// $(() => {
//   $('.js-calendar').each(function () {
//     const $day = $('.js-calendar__day', $(this));
//     const $widget = $('.js-calendar__widget', $(this));
//     $widget.datepicker({
//       showButtonPanel: true,
//       showOtherMonths: true,
//       changeYear: false,
//       dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//       altField: $day,
//       altFormat: 'dd',
//       firstDay: 1,
//     });
//     $('.ui-datepicker-current', $(this)).on('click', () => {
//       $widget.datepicker('setDate', new Date());
//     });
//   });
// });


class Datepicker {
  constructor(element) {
    this.$calendar = $(element);
    this.$day = $(this.$calendar).find('.js-calendar__day');
    this.$widget = $(this.$calendar).find('.js-calendar__widget');
    this.$currentDay = $(this.$widget).find('.ui-datepicker-current');
    this.initEvent();
  }

  initEvent() {
    $(this.$widget).datepicker({
      showButtonPanel: true,
      showOtherMonths: true,
      changeYear: false,
      dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      altField: $(this.$day),
      altFormat: 'dd',
      firstDay: 1,
    });

    $(this.$currentDay).on('click', () => {
      this.$widget.datepicker('setDate', new Date());
    });
  }
}

$(document).ready(() => {
  $('.js-calendar').each(function () {
    new Datepicker(this);
  });
});
