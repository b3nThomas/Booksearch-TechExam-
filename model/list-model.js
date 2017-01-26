//https://alexatnet.com/articles/model-view-controller-mvc-javascript

function ListModel(url) {

  this._url = url;
  this._data;
  this._products = [];
  this._aToZ = [];

};


ListModel.prototype = {


  getData : function() {
    //Retrieve and store data from the designated url as a property
    var self = this;
    console.log("gathering data...")
    $.getJSON(this._url, function(response) {
        console.log("data stored...")
        return self._data = response;
      })
  },


  getProducts : function() {
    //Extract and store product objects from the data
    var self = this;
    $.each(this._data.worksById, function(index, value) {
        self._products.push(value);
    })
    console.log("products stored...");
  },





};
