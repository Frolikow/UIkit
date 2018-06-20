
'use strict';

$(function () {
  var params = window.location.search.replace('?', '').split('&').reduce(
    function (p, e) {
      var a = e.split('=');
      p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
      return p;
    },
    {}
  );
  var buyItem_currentCar = document.getElementsByClassName('buyItem_form_currentCar')[0];
  buyItem_currentCar.innerHTML = "Выбранный авто: <b>" + params['carName'] + "</b>; Цена аренды: <b>" + params['carPrice'] + "</b> руб./час.";
  var selectedAuto="Выбранный авто: " + params['carName'] + ";\nЦена аренды: " + params['carPrice'] + " руб./час.";
  
  document.getElementById("buyItem_calendarAndEnd_button").addEventListener('click', alertFinalDoc);
  
  function alertFinalDoc() {
    console.log(selectedAuto)

    function testDropDown(type, text) {
      if (type.options[type.selectedIndex].value == 0) {
        console.log(text + ': Не выбрано');
      } else {
        console.log(text + ': ' + type.options[type.selectedIndex].text);
      }
    }
    var autoBox = document.getElementsByName('finalFormAutoBox')[0];
    testDropDown(autoBox, 'Коробка передач');
    var useLocation = document.getElementsByName('finalFormUseLocation')[0];
    testDropDown(useLocation, 'Территория использования');
    var buyLocation = document.getElementsByName('finalFormBuyLocation')[0];
    testDropDown(buyLocation, 'Место офромления аренды');

    var rentAutoHours = document.getElementsByClassName('standartSlider_custom-handle')[0];
    console.log('Количество часов аренды: ' + rentAutoHours.textContent);

    function testCheckBox(type, text) {
      if (type.checked) {
        checkBoxArray[checkBoxArray.length] = text;
      }
    }
    var checkBoxArray = [];
    var childrenArmchair = document.getElementsByName('finalFormChildrenArmchair')[0];
    testCheckBox(childrenArmchair, 'Детское кресло')
    var navigate = document.getElementsByName('finalFormNavigate')[0];
    testCheckBox(navigate, 'Навигатор')
    var autoRefrigerator = document.getElementsByName('finalFormAutoRefrigerator')[0];
    testCheckBox(autoRefrigerator, 'Авто-холодильник')
    if (checkBoxArray == '') {
      console.log('Добавить в машину: Не выбрано');
    } else {
      console.log('Добавить в машину: ' + checkBoxArray);
    }

    var formSurname = document.getElementsByName('formSurname')[0];
    var formName = document.getElementsByName('formName')[0];
    var formPatronymic = document.getElementsByName('formPatronymic')[0];
    var formNumber = document.getElementsByName('formNumber')[0];
    var formEmail = document.getElementsByName('formEmail')[0];
    console.log('ФИО: ' + formSurname.value + ' ' + formName.value + ' ' + formPatronymic.value + '\nКонтактный телефон: ' + formNumber.value + '\nE-mail: ' + formEmail.value)

    var selectedMonth = document.getElementsByClassName('ui-datepicker-month')[0];
    var selectedDay = document.getElementsByClassName('ui-state-active')[0];
    console.log('Выбранная дата: '+selectedMonth.textContent + ' ' + selectedDay.textContent)

    var finalPrice = params['carPrice'] * rentAutoHours.textContent+ ' руб.';
    console.log('Сумма: '+finalPrice);
    console.log("/ / / / / / / / / / / / / / / / / / / / / ");
  }
})




