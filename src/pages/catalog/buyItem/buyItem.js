import $ from 'jquery';

$(() => {
  const params = window.location.search.replace('?', '').split('&').reduce(
    (p, e) => {
      const a = e.split('=');
      p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
      return p;
    },
    {},
  );

  const buyItem_currentCar = document.getElementsByClassName('buyItem_form_currentCar')[0];
  buyItem_currentCar.innerHTML = `Выбранный авто: <b>${params.carName}</b>; Цена аренды: <b>${params.carPrice}</b> руб./час.`;
  const selectedAuto = `Выбранный авто: ${params.carName};\nЦена аренды: ${params.carPrice} руб./час.`;

  function alertFinalDoc() {
    console.log(selectedAuto);

    function testDropDown(type, text) {
      if (type.options[type.selectedIndex].value === '0') {
        console.log(`${text}: Не выбрано`);
      } else {
        console.log(`${text}: ${type.options[type.selectedIndex].text}`);
      }
    }
    const autoBox = document.getElementsByName('finalFormAutoBox')[0];
    testDropDown(autoBox, 'Коробка передач');
    const useLocation = document.getElementsByName('finalFormUseLocation')[0];
    testDropDown(useLocation, 'Территория использования');
    const buyLocation = document.getElementsByName('finalFormBuyLocation')[0];
    testDropDown(buyLocation, 'Место офромления аренды');

    const rentAutoHours = document.getElementsByClassName('standartSlider_custom-handle')[0];
    console.log(`Количество часов аренды: ${rentAutoHours.textContent}`);

    const checkBoxArray = [];
    function testCheckBox(type, text) {
      if (type.checked) {
        checkBoxArray[checkBoxArray.length] = text;
      }
    }
    const childrenArmchair = document.getElementsByName('finalFormChildrenArmchair')[0];
    testCheckBox(childrenArmchair, 'Детское кресло');
    const navigate = document.getElementsByName('finalFormNavigate')[0];
    testCheckBox(navigate, 'Навигатор');
    const autoRefrigerator = document.getElementsByName('finalFormAutoRefrigerator')[0];
    testCheckBox(autoRefrigerator, 'Авто-холодильник');
    if (checkBoxArray === '') {
      console.log('Добавить в машину: Не выбрано');
    } else {
      console.log(`Добавить в машину: ${checkBoxArray}`);
    }

    const formSurname = document.getElementsByName('formSurname')[0];
    const formName = document.getElementsByName('formName')[0];
    const formPatronymic = document.getElementsByName('formPatronymic')[0];
    const formNumber = document.getElementsByName('formNumber')[0];
    const formEmail = document.getElementsByName('formEmail')[0];
    console.log(`ФИО: ${formSurname.value} ${formName.value} ${formPatronymic.value}\nКонтактный телефон: ${formNumber.value}\nE-mail: ${formEmail.value}`);

    const selectedMonth = document.getElementsByClassName('ui-datepicker-month')[0];
    const selectedDay = document.getElementsByClassName('ui-state-active')[0];
    console.log(`Выбранная дата: ${selectedMonth.textContent} ${selectedDay.textContent}`);

    const finalPrice = `${params.carPrice * rentAutoHours.textContent} руб.`;
    console.log(`Сумма: ${finalPrice}`);
    console.log('/ / / / / / / / / / / / / / / / / / / / / ');
  }

  document.getElementById('buyItem_calendarAndEnd_button').addEventListener('click', alertFinalDoc);
});

