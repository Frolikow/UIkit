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

  const buyItem_currentCar = document.getElementsByClassName('order-settings__current-car')[0];
  buyItem_currentCar.innerHTML = `<p>Выбранный авто: <b>${params.carName}</b>;</p><p>Цена аренды: <b>${params.carPrice}</b> руб./час.</p>`;
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
    const autoTransmission = document.getElementsByName('transmission')[0];
    testDropDown(autoTransmission, 'Коробка передач');
    const territoryOfUse = document.getElementsByName('territory-of-use')[0];
    testDropDown(territoryOfUse, 'Территория использования');
    const placeOfRenting = document.getElementsByName('place-of-renting')[0];
    testDropDown(placeOfRenting, 'Место офромления аренды');

    const rentAutoHours = document.getElementsByClassName('js-standard-slider__custom-handle')[0];
    console.log(`Количество часов аренды: ${rentAutoHours.textContent}`);

    const checkBoxArray = [];
    function testCheckBox(type, text) {
      if (type.checked) {
        checkBoxArray[checkBoxArray.length] = text;
      }
    }
    const childrenArmchair = document.getElementsByName('children-armchair')[0];
    testCheckBox(childrenArmchair, 'Детское кресло');
    const navigate = document.getElementsByName('navigate')[0];
    testCheckBox(navigate, 'Навигатор');
    const autoRefrigerator = document.getElementsByName('auto-refrigerator')[0];
    testCheckBox(autoRefrigerator, 'Авто-холодильник');
    if (checkBoxArray === '') {
      console.log('Добавить в машину: Не выбрано');
    } else {
      console.log(`Добавить в машину: ${checkBoxArray}`);
    }

    const formSurname = document.getElementsByName('form-surname')[0];
    const formName = document.getElementsByName('form-name')[0];
    const formPatronymic = document.getElementsByName('form-patronymic')[0];
    const formNumber = document.getElementsByName('form-number')[0];
    const formEmail = document.getElementsByName('form-email')[0];
    console.log(`ФИО: ${formSurname.value} ${formName.value} ${formPatronymic.value}\nКонтактный телефон: ${formNumber.value}\nE-mail: ${formEmail.value}`);

    const selectedMonth = document.getElementsByClassName('ui-datepicker-month')[0];
    const selectedDay = document.getElementsByClassName('ui-state-active')[0];
    console.log(`Выбранная дата: ${selectedMonth.textContent} ${selectedDay.textContent}`);

    const finalPrice = `${params.carPrice * rentAutoHours.textContent} руб.`;
    console.log(`Сумма: ${finalPrice}`);
    console.log('--/--/--/--/--/--/--/--/--/--/--/--/--/--');
  }

  $('.standard-button').on('click', alertFinalDoc);
});

