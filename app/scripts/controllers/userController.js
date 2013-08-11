'use strict';

angular.module('angularDemoApp')
  .controller('UsercontrollerCtrl', function ($scope,datum) {
    $scope.user = {name: "Ankit"};
    $scope.factory = datum;
  });
