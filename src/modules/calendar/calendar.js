'use strict';

$(function () {
  $('#datepicker').each(function () {
    let $day = $('.calendar__day', $(this));
    let $widget = $('.js-calendar__widget', $(this));
    $widget.datepicker({
      showButtonPanel: true,
      showOtherMonths: true,
      changeYear: false,
      altField: $day,
      altFormat: "dd",
      firstDay: 1
    });
    $('.ui-datepicker-current', $(this)).on('click', (event) => {
      $widget.datepicker('setDate', new Date());
    })
  });
});