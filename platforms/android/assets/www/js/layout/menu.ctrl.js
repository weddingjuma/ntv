(function(){
  'use strict';
  angular.module('app')
    .controller('MenuCtrl', MenuCtrl);

  function MenuCtrl($scope, $state, $location, User){
  // add a logout function for logout button in menu
  $scope.logout = function () {
      User.logout(function () {
          $location.path('/signin');
      });
  }
  }
})();
