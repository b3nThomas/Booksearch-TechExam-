//BenThomas 16/01/17
//URL: https://d1jbsliibf6nxf.cloudfront.net/


//FUNCTIONS

//JQUERY

$(document).ready(function(){

      getData('j/data.json');//stores JSON data when page loads.

      $('#getAZ').click(function(){
        getAZ();
        console.log(aZ);
        $('#aZ').html(aZ);
      })

});//jq end
