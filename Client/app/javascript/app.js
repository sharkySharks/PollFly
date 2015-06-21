'use strict';

var PollFly = angular.module('PollFly', [
  'ngRoute',
  'PollFly.createPolls',
  'PollFly.votePoll',
  'PollFly.services'
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
    .when('/polls/:pollId/vote', {
      templateUrl: 'app/views/votePoll.html',
      controller: 'PollForVote'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);