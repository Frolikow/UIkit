'use strict'

$(function () {
  var date = new Date;
  var options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
  var messageBase = [{
    type: 'in', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', time: date.toLocaleString("ru", options)
  }, {
    type: 'out', text: 'A, maxime. Tenetur beatae delectus molestias.', time: date.toLocaleString("ru", options)
  }, {
    type: 'in', text: 'Quisquam quis,  pariatur, quam consequatur quos!', time: date.toLocaleString("ru", options)
  }];
  var messageText;

  function addMessage(type, text, time, newMessageClassName) {
    var messager = document.getElementsByClassName('messager__chat')[0];
    var newMessage = document.createElement('div');
    if (type == "insertBaseMessage") {
      newMessage.className = newMessageClassName;
    }
    else {
      newMessage.className = 'messager__chat__message__out messager__chat__message';
    }
    newMessage.innerHTML = text;
    messager.appendChild(newMessage);
  }

  function loadMessageFromBase() {
    messageBase.forEach(function (item, i, messageBase) {
      var newMessageClassName;
      if (messageBase[i].type == 'out') {
        newMessageClassName = 'messager__chat__message__out messager__chat__message';
      }
      else {
        newMessageClassName = 'messager__chat__message__in messager__chat__message';
      }
      messageText = messageBase[i].text;
      addMessage('insertBaseMessage', messageText, date.toLocaleString("ru", options), newMessageClassName);
    })
  }

  function createOutMessage() {
    messageText = document.getElementById('messager__input__newMessage').value;
    if (messageText == "") {
      return;
    }
    else {
      addMessage('insertNewMessage', messageText, date.toLocaleString("ru", options));
      document.getElementById('messager__input__newMessage').value = '';
    }
  }
  document.getElementById("messager__input__btn").addEventListener('click', createOutMessage);

  loadMessageFromBase(messageBase);
})