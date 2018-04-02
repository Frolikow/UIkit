
'use strict';
$(function () {

  document.getElementById('MyForm').addEventListener('submit', function (e) {
    e.preventDefault()

    var name = document.getElementsByName('formName')[0];
    var email = document.getElementsByName('formEmail')[0];
    var message = document.getElementsByName('formMessage')[0];
    console.log("Name: '"+name.value + "', e-mail: '"+email.value+"', message: '"+message.value+"'");
  })
})