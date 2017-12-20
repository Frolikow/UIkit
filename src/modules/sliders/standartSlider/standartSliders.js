
$( function() {
  $( ".standartSlider" ).each(function(){ //перебор всех элементов с данным классом
    let handle = $(this).find( ".standartSlider_custom-handle" ); //запись в handle значения внутри каждого .standartSlider
    $(this).slider({ //инициализация каждого слайдера взависимости от this
      animate: true,
      value: 40,
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });
  })
} ); 




