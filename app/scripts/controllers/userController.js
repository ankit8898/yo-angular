'use strict';

angular.module('angularDemoApp')
  .controller('UsercontrollerCtrl', function ($scope,datum) {
    $scope.user = {name: "Ankit"};
    $scope.factory = datum;

    $scope.reversedArray = function(arr){
    	var v = {message: "From Method", bb: arr.reverse()};
    	return v;
    }
  });
