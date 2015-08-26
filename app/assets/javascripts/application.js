$(document).ready(function(){

  GOVUK.toggle.init();

  // Initialise auto-suggest fields
  $('.auto-suggest').selectToAutocomplete();

  // Selected state on grey form control labels
  var $buttons = $(".version-1 label input[type='radio'], .version-1 label input[type='checkbox']");
  var selectionButtons = new GOVUK.SelectionButtons($buttons);

  
  // Uses radio buttons to emulate a more usable select box
  $( ".js-form-select, .js-form-select label" ).click(function() {
  	$( this ).closest('.js-form-select').toggleClass( "open" );
  });

});