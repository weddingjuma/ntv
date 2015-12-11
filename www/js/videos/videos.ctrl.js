(function(){
  'use strict';
  angular.module('app.videos')
    .controller('VideosCtrl', function($scope, $http){
      $scope.videos = [
        {
      title: "My first video",
      date: "1-1-2015",
      thumbnails: "http://i.ytimg.com/vi/bJp1ptX4F3M/maxresdefault.jpg",
    },
    {
      title: "My second video",
      date: "5-7-2015",
      thumbnails: "http://i.ytimg.com/vi/NA2VerbOyt0/maxresdefault.jpg",
    }
      ]
    });
})();
