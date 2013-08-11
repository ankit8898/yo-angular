'use strict';

angular.module('angularDemoApp')
  .controller('UsercontrollerCtrl', function ($scope,datum) {
    $scope.user = {name: "Ankit"};
    $scope.factory = datum;

    $scope.reversedArray = function(){
    	var v = {message: "From Method", bb: $scope.factory.arr.reverse()};
    	return v;
    }
  });
