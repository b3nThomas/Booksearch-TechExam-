//respository.js
//Have buttons become visible once data has loaded.
//Researching Modular design pattern
//Use try catch for error logging.

var data = ""
var products = [];
var aZ = [];

function statusUpdate(text){ //Log updates and informs user of actions
  $('#status').append(text);
  console.log(text)
}

function getData(url){ //Locally stores .json data.
  $.getJSON(url, function(response){
    data = response;
    statusUpdate("JSON data stored...");
    getProducts();
    getAZ();
  });
};

function getProducts(){ //Locally stores product IDs.
  $.each(data.worksById, function(index, value){
    products.push(value);
  });
  statusUpdate("Products data stored...");
};

function getAZ(){//Returns A-Z of titles as string.
  aZ = [];
  for(i = 0; i < products.length; i++){
    aZ.push("<ul>" + products[i].Title.TitleText + "</ul>");
    aZ.sort();
    aZ.toString();
  }
  statusUpdate("A-Z data stored...");
  console.log(aZ)
  $('#aZ').html(aZ);
}

function resetPage(){
  $('#status').html("");
  statusUpdate("Page reset...Data reloaded...")
  $('#aZ').hide(500);
  getData();
}

$(document).ready(function(){

});//Doc.ready end
