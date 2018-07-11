import $ from 'jquery';

$(() => {
  document.getElementById('MyForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementsByName('formName')[0];
    const email = document.getElementsByName('formEmail')[0];
    const message = document.getElementsByName('formMessage')[0];
    console.log(`Name: '${name.value}', e-mail: '${email.value}', message: '${message.value}'`);
  });
});
