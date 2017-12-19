
$( function() {
  var handle = $( ".standartSlider_custom-handle" );
  $( ".standartSlider" ).slider({
    value: 40,
    range: "min",
    create: function() {
      handle.text( $( this ).slider( "value" ) );
    },
    slide: function( event, ui ) {
      handle.text( ui.value );
    }
  });
} );