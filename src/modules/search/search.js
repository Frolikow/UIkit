class Search {
  constructor(element) {
    this.$search = $(element);
    this.$searchInput = $(this.$search).find('.js-search__input');
    this.eventSearch();
  }
  eventSearch() {
    this.$search.submit(() => {
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
        this.$searchInput.on('click', () => {
          if (this.$searchInput.val() === ('I’ve not found what I’m looking for...')) {
            this.$searchInput.val('');
            this.$searchInput.removeClass('search__input_result_none');
          }
        });
      }
      return false;
    });
  }
}

$(document).ready(() => {
  $('.js-search').each(function () {
    new Search(this);
  });
});
