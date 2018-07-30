import $ from 'jquery';

$(document).ready(() => {
  $('form').submit(() => {
    let n = '0';
    const txt = $('.search__input').val();
    $('body').removeHighlight();
    if (txt === '') {
      return false;
    }

    $('body').highlight(txt);
    n = $('span.highlight').length;
    if (n === 0) {
      $('.search__input').addClass('search__input_result_none');
      $('.search__input').val('I’ve not found what I’m looking for...');
      $('.search__input').one('click', () => {
        $('.search__input').val('');
        $('.search__input').removeClass('search__input_result_none');
      });
    }
    return false;
  });
});

