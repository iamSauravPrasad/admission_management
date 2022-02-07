
    var myapp=angular.module("myapp",[]);
    myapp.controller("myctrl",function($scope,$http)
   {
       $http.get('https://ksauravp.github.io/admission_management/data.json')
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
   
  