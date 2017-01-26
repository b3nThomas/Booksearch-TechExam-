//https://alexatnet.com/articles/model-view-controller-mvc-javascript

function ListModel(url) {

  this._data = getData(url);
  this._products = getProducts();
  this._aToZ = sortProducts();

}



ListModel.prototype = {

  getData : function(url) {
    $.getJSON(url, function(response) {
      return response;
    }
  }

  getProducts : function() {
    var products = [];
    $.each(this._data.worksById, function(index, value){
      products.push(value)
    });
    return products;

  sortProducts : function() {
    this._products.Title.TitleText.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());//Sorts case insensitively
    });

  }

}
