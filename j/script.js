//BenThomas 16/01/17
//URL: https://d1jbsliibf6nxf.cloudfront.net/


//FUNCTIONS

//JQUERY

$(document).ready(function(){

  getData('j/data.json');
    //stores JSON data when page loads.

  $('#aZ').hide();
  
  $('#getAZ').click(function(){
    $('#aZ').toggle(500);
    statusUpdate("A-Z toggled...");
  })

  $('#reset').click(function() {
      resetPage();
  });


});//jq end
