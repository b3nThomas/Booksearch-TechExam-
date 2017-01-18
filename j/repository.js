//respository.js
//GOAL: Make a set of functions that can pull and manipulate the JSON data.
//Learned $.getJSON to retrieve data.
//Studied self invoking functions.
//Studied .each() to loop through object.
//Having trouble working with asynchronous callbacks
//Have buttons become visible once data has loaded.
//Researching Modular design pattern
//Use try catch for error logging.

var data = ""
var products = [];
var aZ = [];

function statusUpdate(text){ //Log updates and informs user of actions
  $('#status').html(text);
  console.log(text)
}


function getData(url){ //Locally stores .json data.
  $.getJSON(url, function(response){
    data = response;
    statusUpdate("JSON data stored on client");
    getProducts();
  });
};


function getProducts(){ //Locally stores product IDs.
  $.each(data.worksById, function(index, value){
    products.push(value);
  });
  statusUpdate("Products data stored on client");
};

function getAZ(){
  aZ = [];
  for(i = 0; i < products.length; i++){
    aZ.push(products[i].Title.TitleText + "<br>");
    aZ.sort();
    aZ.toString();
  }

  statusUpdate("A-Z data collected and displayed. ");
}


$(document).ready(function(){

});//Doc.ready end
