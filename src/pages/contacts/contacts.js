import $ from 'jquery';

class FeedbackForm {
  constructor(element) {
    this.$form = $(element);
    this.$formName = $(this.$form).find('*[name=formName]');
    this.$formEmail = $(this.$form).find('*[name=formEmail]');
    this.$formMessage = $(this.$form).find('*[name=formMessage]');
    this.initEvent();
  }
  initEvent() {
    this.$form.on('submit', (e) => {
      e.preventDefault();

      const name = this.$formName;
      const email = this.$formEmail;
      const message = this.$formMessage;
      console.log(`Name: ${name.val()},\ne-mail: ${email.val()},\nmessage: ${message.val()}`);
    });
  }
}

$(document).ready(function () {
  new FeedbackForm(this);
});
