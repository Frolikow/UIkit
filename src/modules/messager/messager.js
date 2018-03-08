
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

  function createMessage(typeMessage, messageOut) {

    if (typeMessage == "insertBaseMessage") {
      messageBase.forEach(function (item, i, messageBase) {
        var messager = document.getElementsByClassName('messager__chat')[0];
        var newMessage = document.createElement('div');
        if (messageBase[i].type == 'out') {
          newMessage.className = 'messager__chat__message__out messager__chat__message';
        }
        else {
          newMessage.className = 'messager__chat__message__in messager__chat__message';
        }
        newMessage.innerHTML = messageBase[i].text;
        messager.appendChild(newMessage);
      })
    }
    if (typeMessage == "insertNewMessage") {
      var messager = document.getElementsByClassName('messager__chat')[0];
      var newMessage = document.createElement('div');
      newMessage.className = 'messager__chat__message__out messager__chat__message';
      newMessage.innerHTML = messageOut;
      messager.appendChild(newMessage);
      document.getElementById('messager__input__newMessage').value = '';
    }
  }

  function loadMessageFromBase() {
    createMessage('insertBaseMessage');
  };
  loadMessageFromBase();

  function createOutMessage() {
    var messageOut = document.getElementById('messager__input__newMessage').value;
    if (messageOut == "") {
      return;
    }
    else {
      createMessage('insertNewMessage', messageOut);
    }
  }
  document.getElementById("messager__input__btn").addEventListener('click', createOutMessage);
})