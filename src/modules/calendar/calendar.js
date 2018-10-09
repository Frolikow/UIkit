
class Datepicker {
  constructor(element) {
    this.$calendar = $(element);
    this.$day = this.$calendar.find('.js-calendar__day');
    this.$widget = this.$calendar.find('.js-calendar__widget');
    this.$currentDay = this.$calendar.find('.js-calendar__today');
    this.selectDay = new Date();
    this.initEvent();
  }

  initEvent() {
    this.$widget.datepicker({
      showOtherMonths: true,
      changeYear: false,
      dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      firstDay: 1,
      onSelect: () => {
        this.selectDay = this.$widget.datepicker('getDate');
        this.$day.text($.datepicker.formatDate('dd', this.selectDay));
      },
    });

    this.$day.text($.datepicker.formatDate('dd', this.selectDay));

    $(this.$currentDay).on('click', () => {
      this.$widget.datepicker('setDate', new Date());
      this.$day.text($.datepicker.formatDate('dd', new Date()));
    });
  }
}

$(document).ready(() => {
  $('.js-calendar').each(function () {
    new Datepicker(this);
  });
});
