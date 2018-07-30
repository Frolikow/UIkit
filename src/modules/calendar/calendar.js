import $ from 'jquery';

$(() => {
  $('.js-calendar').each(function () {
    const $day = $('.js-calendar__day', $(this));
    const $widget = $('.js-calendar__widget', $(this));
    $widget.datepicker({
      showButtonPanel: true,
      showOtherMonths: true,
      changeYear: false,
      dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      altField: $day,
      altFormat: 'dd',
      firstDay: 1,
    });
    $('.ui-datepicker-current', $(this)).on('click', () => {
      $widget.datepicker('setDate', new Date());
    });
  });
});
