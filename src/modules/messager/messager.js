import $ from 'jquery';

class Messaging {
  constructor(element) {
    this.$messagerBlock = $(element);
    this.$messaging = $(this.$messagerBlock).find('.js-messager__chat');
    this.$buttonSendMessage = $(this.$messagerBlock).find('.js-messager__button-send-message');
    this.$inputNewMessage = $(this.$messagerBlock).find('.js-messager__input_message_new');
    this.createOutgoingMessage();
    this.loadMessageFromBase();
    this.addNewMessage();
  }
  createOutgoingMessage() {
    $(this.$buttonSendMessage).on('click', () => {
      const date = new Date();
      const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
      const message = {
        type: 'outgoing',
        text: this.$inputNewMessage.val(),
        time: date.toLocaleString('ru', options),
      };
      if (message.text !== '') {
        this.addNewMessage(message);
        this.$inputNewMessage.val('');
      }
    });
  }
  addNewMessage(messageObj) {
    const newMessage = document.createElement('div');
    newMessage.className = `messager__chat_message_${messageObj.type} messager__chat_message`;
    newMessage.innerHTML = messageObj.text;
    this.$messaging.append(newMessage);
  }
  loadMessageFromBase() {
    const messageBase = [{
      type: 'incoming', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    }, {
      type: 'outgoing', text: 'A, maxime. Tenetur beatae delectus molestias.',
    }, {
      type: 'incoming', text: 'Quisquam quis,  pariatur, quam consequatur quos!',
    }];
    let i = 0;
    messageBase.forEach(() => {
      this.addNewMessage(messageBase[i]);
      i += 1;
    });
  }
}

$(document).ready(() => {
  $('.messager').each(function () {
    new Messaging(this);
  });
});
