(function(){
  var app = angular.module("ap.data");
  
  app.factory("ap.data.User", [ "$resource", 
    function ($resource) {
      var Resource = $resource( "/users/:id", { id: "@id" }),
          proto = Resource.prototype;

      //    
      // Instance methods and class methods go here
      // 

      return Resource;
    }
  ]);
}());