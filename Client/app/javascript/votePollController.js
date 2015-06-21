'use strict';

angular.module('PollFly.votePoll', ['ngRoute'])

.controller('PollForVote', function($scope, $routeParams, PollData, Polls){

  $scope.poll = PollData.get({pollId: $routeParams.pollId});

  $scope.getIP = function(){
    $.getJSON("http://jsonip.com?callback=?", function (data) {
        alert("Your ip: " + data.ip);
    });
  };

  $scope.voteData = {
    pollId: $scope.pollId,
    votes: [],
    IP: 'testip'
  }

  $scope.vote = function(){
    localStorage.setItem(); // set ip or a flag to indicate voting happened
    
    console.log('voteData:', voteData);

    Polls.pollVote(voteData);
    console.log('$scope.poll:', $scope.poll);
  };

});
