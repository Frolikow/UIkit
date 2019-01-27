/* eslint-disable no-underscore-dangle */
class Messaging {
  constructor(element) {
    this.$messagingBlock = $(element);
    this.$messaging = this.$messagingBlock.find('.js-messaging__chat');
    this.$buttonSendMessage = this.$messagingBlock.find('.js-messaging__button-send-message');
    this.$inputNewMessage = this.$messagingBlock.find('.js-messaging__input-new-message');
    this._initEventListeners();
  }

  _initEventListeners() {
    this.$buttonSendMessage.on('click', this._handleButtonSendMessageClick.bind(this));
  }

  _addNewMessage(messageObj) {
    const newMessage = document.createElement('div');
    newMessage.className = `messaging__message messaging__message_type_${messageObj.type}`;
    newMessage.innerHTML = messageObj.text;
    this.$messaging.append(newMessage);
  }

  _handleButtonSendMessageClick(e) {
    e.preventDefault();
    const date = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const message = {
      type: 'outgoing',
      text: this.$inputNewMessage.val(),
      time: date.toLocaleString('ru', options),
    };

    if (message.text !== '') {
      this._addNewMessage(message);
      this.$inputNewMessage.val('');
    }
  }
}

$(document).ready(() => {
  $('.js-messaging').each(function () {
    new Messaging(this);
  });
});
