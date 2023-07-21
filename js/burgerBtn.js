$(function(){
  $("#slide_open").click(function(){
      $("#slide_menu").fadeToggle();
      if($("#burger").hasClass('on')){
          $("#burger").removeClass('on');
      } else{
          $("#burger").addClass('on');
      }
  });
});