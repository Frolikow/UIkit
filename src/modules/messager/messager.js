class Messaging {
  constructor(element) {
    this.$messagerBlock = $(element);
    this.$messaging = this.$messagerBlock.find('.js-messager__chat');
    this.$buttonSendMessage = this.$messagerBlock.find('.js-messager__button-send-message');
    this.$inputNewMessage = this.$messagerBlock.find('.js-messager__input-new-message');
    this.createOutgoingMessage();
    this.loadMessageFromBase();
  }
  createOutgoingMessage() {
    this.$buttonSendMessage.on('click', (e) => {
      e.preventDefault();
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
    messageBase.forEach((el, index) => {
      this.addNewMessage(messageBase[index]);
    });
  }
}

$(document).ready(() => {
  $('.js-messager').each(function () {
    new Messaging(this);
  });
});
