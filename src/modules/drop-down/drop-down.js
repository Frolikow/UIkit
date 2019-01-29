/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

class DropDown {
  constructor(element) {
    this.$dropDown = $(element);
    this.$defaultString = this.$dropDown.find('.drop-down__default-string');
    this.$dropDownItems = this.$dropDown.find('.drop-down__items');
    this.$dropDownItem = this.$dropDown.find('.drop-down__item');

    this._setEventListenters();
  }
  _setEventListenters() {
    this.$defaultString.click(this._handleDefaultStringClick.bind(this));
    this.$dropDownItem.click(this._handleDropDownItemClick.bind(this));
  }

  _handleDefaultStringClick() {
    const isHiddenDropDownItems = this.$dropDown.css('overflow') === 'hidden';
    if (isHiddenDropDownItems) {
      this.$dropDownItems.css('top', '24px');
      this.$dropDown.css('overflow', 'visible');
    }

    if (!isHiddenDropDownItems) {
      this.$dropDownItems.css('top', '28px');
      this.$dropDown.css('overflow', 'hidden');
    }
  }

  _handleDropDownItemClick(e) {
    this.$dropDown.css('overflow', 'hidden');
    this.$dropDownItems.css('top', '28px');
    this.$defaultString.text($(e.currentTarget).text());
  }
}

$(document).ready(() => {
  $('.drop-down').each(function () {
    new DropDown(this);
  });
});
