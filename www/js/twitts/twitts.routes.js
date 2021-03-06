(function(){
  'use strict';
  angular.module('app')
    .config(configure);

  function configure($stateProvider){
    $stateProvider
      .state('app.tabs.twitts', {
      url: '/twitts',
      views: {
        'twitts-tab': {
          templateUrl: 'js/videos/videos.html',
          controller: 'VideosCtrl'
        }
      }
    })
      .state('app.tabs.twitt', {
      url: '/twitt/:twittId',
      views: {
        'twitts-tab': {
          templateUrl: 'js/twitts/twitt-detail.html',
          controller: 'TwittCtrl'
        }
      }
    });
  }
})();
