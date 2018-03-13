'use strict'

$(function () {
  var messageBase = [{
    type: 'in', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
  }, {
    type: 'out', text: 'A, maxime. Tenetur beatae delectus molestias.'
  }, {
    type: 'in', text: 'Quisquam quis,  pariatur, quam consequatur quos!'
  }];
  var message={};

  function addMessage(message) {
    var date = new Date;
    var options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var messager = document.getElementsByClassName('messager__chat')[0];
    var newMessage = document.createElement('div');
    message.time = date.toLocaleString("ru", options);
    if (message.type == 'out') {
      newMessage.className = 'messager__chat__message__out messager__chat__message';
    }
    else {
      newMessage.className = 'messager__chat__message__in messager__chat__message';
    }
    newMessage.innerHTML = message.text;
    messager.appendChild(newMessage);
  };

  function loadMessageFromBase() {
    messageBase.forEach(function (item, i, messageBase) {
      message.type = messageBase[i].type;
      message.text = messageBase[i].text;
      addMessage(message);
    })
  };

  function createOutMessage() {
    message.type = 'out';
    message.text= document.getElementById('messager__input__newMessage').value;
    if (message.text == "") {
      return;
    }
    else {
      addMessage(message);
      document.getElementById('messager__input__newMessage').value = '';
    }
  };
  document.getElementById("messager__input__btn").addEventListener('click', createOutMessage);

  loadMessageFromBase(messageBase);
});