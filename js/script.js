
$(document).ready(function(){
 $('button').click(function(){
  $('.btn-fixed-2').fadeToggle('slow');
   $('.btn-fixed-1').fadeToggle('slow');
    $('ul').fadeToggle('slow');
    $('.right').toggleClass('help');
 });
});