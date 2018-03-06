
'use strict'

window.onload = function () {

  function testMessage() {
    var date = new Date;
    var options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    var messageBase = [{
      type: 'in',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      time: date.toLocaleString("ru", options)
    }, {
      type: 'out',
      text: 'A, maxime. Tenetur beatae delectus molestias.',
      time: date.toLocaleString("ru", options)
    }, {
      type: 'in',
      text: 'Quisquam quis, explicabo nesciunt exercitationem laborum quas deleniti qui voluptate dolorem neque, pariatur, quam consequatur quos!',
      time: date.toLocaleString("ru", options)
    }
    ];
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

    // console.log(messageBase[0].time);
    // console.log(messageBase[1].time);
    // console.log(messageBase[2].time);
  };
  testMessage();

  function someFunc() {
    var messageOut = document.getElementById('messager__input__test').value;
    if (messageOut == "") {
      return;
    }
    else {
      var messager = document.getElementsByClassName('messager__chat')[0];
      var newMessage = document.createElement('div');
      newMessage.className = 'messager__chat__message__out messager__chat__message';
      newMessage.innerHTML = messageOut;
      messager.appendChild(newMessage);
      document.getElementById('messager__input__test').value = '';
    }
  }
  document.getElementById("messager__input__btn").addEventListener('click', someFunc);
}
