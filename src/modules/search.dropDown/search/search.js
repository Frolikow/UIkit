
$(document).ready(function () {


  $("form").submit(function (event) {
    var n = "0";
    txt = $('#search_input').val();
    $('body').removeHighlight();
    if (txt == '') {
      return false;
    }
    else {
      $('body').highlight(txt);
      n = $("span.highlight").length;
      if (n == 0) {
        $("#search_input").addClass("search_input_notFound");
        $('#search_input').val('I’ve not found what I’m looking for...');
        $('#search_input').one('click', function () {
          $('#search_input').val('');
          $("#search_input").removeClass("search_input_notFound");
        })
      }
      return false;
    }
  })
});

