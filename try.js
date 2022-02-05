
    var myapp=angular.module("myapp",[]);
    myapp.controller("myctrl",function($scope,$http)
   {
       $http.get('https://deepit15.github.io/event/data.json')
       .success(function(response)
       {
           $scope.names=response.records;
           $scope.rowlimit=25;
       });
   });
   myapp.filter("myfilter",function()
   {
    return function (item) {
        return item.toUpperCase();
        };
        });
   myapp.filter("myfilter1",function()
   {
    return function (item) {
        return item.toLowerCase();
        };
        });
   
  