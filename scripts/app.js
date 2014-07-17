(function(){
  'use strict';

  var app = angular.module('cth', ['ngSanitize', 'firebase', 'ui.router']);


  app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/posts/index');

    $stateProvider
      .state('posts', {
        url: '/posts',
        abstract: true,
        templateUrl: 'templates/postList.html',
        controller: 'PostCtrl as postList'
      })
      .state('posts.post', {
        url: '/:post_id'
      })
      .state('about', {
        url: '/pilot',
        templateUrl: 'templates/pilot.html',
        controller: 'PilotCtrl as pilot'

      });
  });


  app.factory('studentsData', ['$firebase', studentsData]);

  function studentsData($firebase){
    var ref = new Firebase("https://cth-pilot.firebaseio.com/students");
    var students = $firebase(ref);
    return students;
  }

  app.filter('markdown', function ($sce) {
    var converter = new Showdown.converter();
    return function (value) {
      var html = converter.makeHtml(value || '');
      return $sce.trustAsHtml(html);
    };
  });

  app.directive('myScroll', function(){
    return {
      restrict: 'EA',
      replace: false,
      scope: {
        selected: '@'
      },
      link: function(scope, element, attrs){
        scrollToPost();

        scope.$watch(scrollToPost);

        function scrollToPost(){
          var el = element.hasClass('active');
          if(el){
            setTimeout(function(){
              var pos = element[0].getBoundingClientRect().top;
              window.scroll(0, pos);
            }, 300);
          }
        }
      }
    };
  });

})();
