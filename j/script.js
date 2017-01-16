//BenThomas 16/01/17
//URL: https://d1jbsliibf6nxf.cloudfront.net/


//FUNCTIONS
var data;

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
    }
};
xmlhttp.open("GET", "https://s3.amazonaws.com/aws-website-booksearch-techexam-jx72a/j/data.json", true);
xmlhttp.send();

//JQUERY
$(document).ready(function(){

  $("body").css("display", "none");
  $("body").hide();
  $("body").fadeIn(1000, function(){

  $('#demo').html(data.worksById[9780000001979].Title.TitleText);
  });

}); //CLOSING TAG (LEAVE ALONE)
