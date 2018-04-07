


$(function () {
  $(".standartSlider").each(function () { //перебор всех элементов с данным классом
    let handle = $(this).find(".standartSlider_custom-handle"); //запись в handle значения внутри каждого .standartSlider
    let slider = document.getElementsByClassName('standartSlider')[0];
    $(this).slider({ //инициализация каждого слайдера взависимости от this
      animate: true,
      min: +slider.getAttribute("data-minimum"),
      value: +slider.getAttribute("data-default"),
      max: +slider.getAttribute("data-maximum"),
      create: function () {
        handle.text($(this).slider("value"));
      },
      slide: function (event, ui) {
        handle.text(ui.value);
      }
    });
  })
});


