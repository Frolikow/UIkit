class Messaging {
  constructor(element) {
    this.$messagingBlock = $(element);
    this.$messaging = this.$messagingBlock.find('.js-messaging__chat');
    this.$buttonSendMessage = this.$messagingBlock.find('.js-messaging__button-send-message');
    this.$inputNewMessage = this.$messagingBlock.find('.js-messaging__input-new-message');
    this.createOutgoingMessage();
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
    newMessage.className = `messaging__message messaging__message_type_${messageObj.type}`;
    newMessage.innerHTML = messageObj.text;
    this.$messaging.append(newMessage);
  }
}

$(document).ready(() => {
  $('.js-messaging').each(function () {
    new Messaging(this);
  });
});
