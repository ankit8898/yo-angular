'use strict';

angular.module('angularDemoApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
      .when('/users', {templateUrl: 'views/user.html', controller: 'UsercontrollerCtrl'})
      .otherwise({
        redirectTo: '/'
      });
  });
