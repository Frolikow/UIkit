import $ from 'jquery';

$(() => {
  const messageBase = [{
    type: 'in', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  }, {
    type: 'out', text: 'A, maxime. Tenetur beatae delectus molestias.',
  }, {
    type: 'in', text: 'Quisquam quis,  pariatur, quam consequatur quos!',
  }];

  function addMessage(message) {
    const date = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const messager = document.getElementsByClassName('messager__chat')[0];
    const newMessage = document.createElement('div');
    message.time = date.toLocaleString('ru', options);
    newMessage.className = `messager__chat__message__${message.type} messager__chat__message`;
    newMessage.innerHTML = message.text;
    messager.appendChild(newMessage);
  }

  function loadMessageFromBase() {
    messageBase.forEach(addMessage);
  }

  function createOutMessage() {
    const message = {};
    message.type = 'out';
    message.text = document.getElementById('messager__input__newMessage').value;
    if (message.text !== '') {
      addMessage(message);
      document.getElementById('messager__input__newMessage').value = '';
    }
  }
  document.getElementById('messager__input__btn').addEventListener('click', createOutMessage);

  loadMessageFromBase(messageBase);
});
