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
    $scope.message = 'Education is the key,to UNLOCKING the world, passport to freedom.ADMISSIONS NOW OPEN....';
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