$(document).ready(function(){

  var model = new ListModel('model/data.json');

  model.getData();

  $('#do-something').click(function(){
    model.getProducts();
    console.log(model._products)
  });

});
