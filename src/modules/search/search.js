/* eslint-disable no-underscore-dangle */
class Search {
  constructor(element) {
    this.$search = $(element);
    this.$searchInput = $(this.$search).find('.js-search__input');
    this._initEventListeners();
  }

  _initEventListeners() {
    this.$searchInput.on('click', this._handleSearchInputClick.bind(this));
    this.$search.submit(this._handleSearchSubmit.bind(this));
  }

  _handleSearchSubmit() {
    let n = '0';
    const txt = this.$searchInput.val();
    $('body').removeHighlight();
    if (txt === '') {
      return false;
    }

    $('body').highlight(txt);
    n = $('span.highlight').length;
    if (n === 0) {
      this.$searchInput.addClass('search__input_result_none');
      this.$searchInput.val('I’ve not found what I’m looking for...');
    }
    return false;
  }

  _handleSearchInputClick() {
    if (this.$searchInput.val() === ('I’ve not found what I’m looking for...')) {
      this.$searchInput.val('');
      this.$searchInput.removeClass('search__input_result_none');
    }
  }
}

$(document).ready(() => {
  $('.js-search').each(function () {
    new Search(this);
  });
});
