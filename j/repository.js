//respository.js
//Have buttons become visible once data has loaded.
//Researching Modular design pattern
//Use try catch for error logging.

var data = ""
var products = [];
var display = [];
var searchResults = [];

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
  products = [];
  $.each(data.worksById, function(index, value){
    products.push(value);
  });
  statusUpdate("Products data stored...");
};

function getAZ(){//Returns A-Z of titles as string.
  display = [];
  for(i = 0; i < products.length; i++){
    display.push("<li>" + products[i].Title.TitleText + "</li>");
  }

  display.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());//Sorts case insensitively
  });

  statusUpdate("A-Z data stored...");
  $('#showData').html(display);
}

function search(){//Return product titles based on input.

  searchResults = [];

  var count = 0
  getAZ();
  var str = prompt("Enter search criteria below:").toLowerCase();

  if(!str){
    alert("No search criteria entered.")
    return
  };

  for(i = 0; i < products.length; i++){
    var check = products[i].Title.TitleText;
    if(check.toLowerCase().search(str) != -1){
      searchResults.push("<li>" + check + "</li>");
      count++;
    }
  }
  searchResults.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());//Sorts case insensitively
  });

  statusUpdate(count + " result(s) found containing '" + str + "'...");

  if(count == 0){
    $('#showData').html("<li> 0 results found. Please try again </li>");
  }
  else{
  $('#showData').html(searchResults);
  }
}

function resetPage(){//Resets page as if newly loaded, re-pulls data and updates variables.
  $('#status').html("");//Empty status bar.
  statusUpdate("Page reset...")
  getData('j/data.json');//Reinitiate data.

}
