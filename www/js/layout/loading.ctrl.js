(function(){
  'use strict';
  angular.module('app')
    .controller('LoadingCtrl', LoadingCtrl);

  function LoadingCtrl($scope, $q, $timeout, $state, User){
    var vm = {};
    $scope.vm = vm;

    $scope.$on('$ionicView.enter', function(viewInfo){
      redirect();
    });

    function redirect(){
      $timeout(function(){
        if (User.getCachedCurrent() == null) {
          $state.go('app.tabs.twitts');
        } else {
          $state.go('app.tabs.twitts');
        }
      }, 300);
    }
  }
})();
