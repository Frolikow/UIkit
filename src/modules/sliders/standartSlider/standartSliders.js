import $ from 'jquery';

$(() => {
  $('.standartSlider').each(function () { // перебор всех элементов с данным классом
    const handle = $(this).find('.standartSlider_custom-handle'); // запись в handle значения внутри каждого .standartSlider
    const slider = document.getElementsByClassName('standartSlider')[0];
    $(this).slider({ // инициализация каждого слайдера взависимости от this
      animate: true,
      min: +slider.getAttribute('data-minimum'),
      value: +slider.getAttribute('data-default'),
      max: +slider.getAttribute('data-maximum'),
      create() {
        handle.text($(this).slider('value'));
      },
      slide(event, ui) {
        handle.text(ui.value);
      },
    });
  });
});
