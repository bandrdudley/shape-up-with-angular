(function(){
  var app = angular.module('store-products', []);

  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: "product-title.html"
    };
  });

  app.directive('productGallery', function(){
    return {
      restrict: "E",
      templateUrl: "product-gallery.html",
      controllerAs: "gallery",
      controller:function(){
        this.current = 0;

        this.setCurrent = function(newValue){
          if(newValue){
            this.current = newValue;
          }
          else{
            this.current = 0;
          }
        };
      }
    };
  });

  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: "product-panels.html",
      controller:function(){

      },
      controllerAs: 'panels'
    };
  });

})();