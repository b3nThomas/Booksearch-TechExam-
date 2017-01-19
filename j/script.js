//BenThomas 16/01/17
//URL: https://d1jbsliibf6nxf.cloudfront.net/


//FUNCTIONS

//JQUERY

$(document).ready(function(){

  getData('j/data.json');
    //stores JSON data when page loads.

  $('#reset').click(function() {
      resetPage();
  });

  $("#search").click(function(){
    search();
  });

});//jq end
