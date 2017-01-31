$(document).ready(function(){

  var model = new ListModel('model/data.json');

  model.getData();

  $('#show-all').click(function(){

    var p = $('#products-list');
    p.html("");

    model.getProducts();

    for(i = 0; i < model._products.length; i++){
      p.append(
        "<li class='product-title'>" + model._products[i].Title.TitleText +
        "</li><li class='product-detail'> Publisher: " + model._products[i].Publisher.PublisherName +
        ", (" + model._products[i].SupplyDetail.ProductAvailability + ") in stock</li>"
      )
    }

  });

});
