//https://alexatnet.com/articles/model-view-controller-mvc-javascript

function ListModel(url) {

  this._url = url;
  this._data;
  this._products = [];

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
    this._products = [];
    var self = this;
    $.each(this._data.worksById, function(index, value) {
        self._products.push(value);
    })
    this.sortProducts();
    console.log("products stored / sorted a-z...")
  },

  sortProducts : function() {
    //Sort _products array based on product title
    this._products.sort(function(a, b) {
      var titleA = a.Title.TitleText.toUpperCase();
      var titleB = b.Title.TitleText.toUpperCase();
      if (titleA < titleB) { return -1; }
      if (titleA > titleB) { return 1; }
      return 0;
    })
  },


};
