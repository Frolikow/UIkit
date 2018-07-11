import $ from 'jquery';

$(document).ready(() => {
  $('form').submit(() => {
    let n = '0';
    const txt = $('#search_input').val();
    $('body').removeHighlight();
    if (txt === '') {
      return false;
    }

    $('body').highlight(txt);
    n = $('span.highlight').length;
    if (n === 0) {
      $('#search_input').addClass('search_input_notFound');
      $('#search_input').val('I’ve not found what I’m looking for...');
      $('#search_input').one('click', () => {
        $('#search_input').val('');
        $('#search_input').removeClass('search_input_notFound');
      });
    }
    return false;
  });
});

