'use strict';

angular.module('angularDemoApp')
  .factory('datum', function () {
    // Service logic
    // ...

    var r = {arr: [1,2,3,4,5,6,7], name: "From factory!"};
    return r;
    // Public API here
  
  });
