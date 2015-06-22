'use strict';

angular.module('PollFly.viewPollResults', ['ngRoute'])

.controller('PollResults', function($scope, $routeParams, $location, PollResults){

  $scope.poll = PollResults.get({pollId: $routeParams.pollId});

  $scope.width = 600;
  $scope.height = 400;

});
