import $ from 'jquery';

$(() => {
  const messageBase = [{
    type: 'incoming', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  }, {
    type: 'outgoing', text: 'A, maxime. Tenetur beatae delectus molestias.',
  }, {
    type: 'incoming', text: 'Quisquam quis,  pariatur, quam consequatur quos!',
  }];

  function addNewMessage(message) {
    const date = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const messager = document.getElementsByClassName('js-messager__chat')[0];
    const newMessage = document.createElement('div');
    message.time = date.toLocaleString('ru', options);
    newMessage.className = `messager__chat_message_${message.type} messager__chat_message`;
    newMessage.innerHTML = message.text;
    messager.appendChild(newMessage);
  }

  function loadMessageFromBase() {
    messageBase.forEach(addNewMessage);
  }

  function createOutgoingMessage() {
    const message = {};
    message.type = 'outgoing';
    message.text = $('.js-messager__input_message_new:eq(0)').val();
    if (message.text !== '') {
      addNewMessage(message);
      $('.js-messager__input_message_new:eq(0)').val('');
    }
  }
  $('.js-messager__button-send-message').on('click', createOutgoingMessage);

  loadMessageFromBase(messageBase);
});
