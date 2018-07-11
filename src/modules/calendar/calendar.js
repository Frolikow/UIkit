import $ from 'jquery';

$(() => {
  $('#datepicker').each(function () {
    const $day = $('.calendar__day', $(this));
    const $widget = $('.js-calendar__widget', $(this));
    $widget.datepicker({
      showButtonPanel: true,
      showOtherMonths: true,
      changeYear: false,
      altField: $day,
      altFormat: 'dd',
      firstDay: 1,
    });
    $('.ui-datepicker-current', $(this)).on('click', () => {
      $widget.datepicker('setDate', new Date());
    });
  });
});
