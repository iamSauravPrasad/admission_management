var app = angular.module('myApp', [], ['ui.bootstrap']);
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
        templateUrl: 'about.html',
        controller: 'FirstController'
    })

    .when('/train', {
        templateUrl: 'train.html',
        controller: 'SecondController'
    })

    .when('/trains', {
        templateUrl: 'trains.html',
        controller: 'ThirdController'
    })

    .otherwise({
        redirectTo: '/'
    });
});


app.controller('FirstController', function($scope) {
    $scope.message = 'A college fest is an integral part of not only its students life but also of the reputation of the college.So the fest needs to be up to the mark.';
});

app.controller('SecondController', function($scope, $http) {
    $http.get('https://ksauravp.github.io/admission_management/data.json')
        .success(function(response) {
            $scope.names = response.records;
        });
});

app.controller('ThirdController', function($scope, $http) {
    $http.get('https://ksauravp.github.io/admission_management/data.json')
        .success(function(response) {
            $scope.names = response.records;
            $scope.rowlimit = 6;
        });
});