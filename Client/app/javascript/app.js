'use strict';

var PollFly = angular.module('PollFly', [
  'ngRoute',
  'PollFly.createPolls',
  'PollFly.votePoll',
  'PollFly.services',
  'PollFly.viewPollResults'
])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/home.html'
    })
    .when('/create', {
      templateUrl: 'app/views/createPoll.html',
      controller: 'NewPollController'
    })
    .when('/polls/:pollId', {
      templateUrl: 'app/views/votePoll.html',
      controller: 'PollForVote'
    })
    .when('/polls/:pollId/result', {
      templateUrl: 'app/views/resultPoll.html',
      controller: 'PollResults'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);