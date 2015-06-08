$(document).ready(function(){

  GOVUK.toggle.init();


  $('.auto-suggest').selectToAutocomplete();


  var $buttons = $(".apply-1 label input[type='radio'], .apply-1 label input[type='checkbox']");
  var selectionButtons = new GOVUK.SelectionButtons($buttons);

});