'use strict';

angular.module('PollFly.votePoll', ['ngRoute'])

.controller('PollForVote', function($scope, $routeParams, PollData, Polls){

  $scope.poll = PollData.get({pollId: $routeParams.pollId});

  $scope.userVoted = false;

  $scope.choiceVotes = {};

  $scope.addRemoveVote = function(choice){
    if(!$scope.choiceVotes.hasOwnProperty(choice)){
      $scope.choiceVotes[choice] = true;
    } else {
      $scope.choiceVotes[choice] = !$scope.choiceVotes[choice]; 
    }
  };

  $scope.setStorage = function(voteData){
    if(localStorage.getItem('PollFly') === null){
      var storage = {};
      storage[voteData.IP] = {};
      storage[voteData.IP][voteData.pollId] = true;
      localStorage.setItem('PollFly', JSON.stringify(storage));
    } else {
      var currentStorage = JSON.parse(localStorage.getItem('PollFly'));
      
      if(!currentStorage.hasOwnProperty(voteData.IP)){
        currentStorage[voteData.IP][voteData.pollId] = true;
      } else {
        console.log('USER HAS ALREADY VOTED FOR THIS POLL!');
      }
      localStorage.setItem('PollFly', JSON.stringify(currentStorage));
    }
  };

  $scope.vote = function(){

    var voteData = {
      pollId: $scope.poll._id,
      votes: [], // <-- choice._id's
      IP: 'testip'
    };

    Polls.getIPAddress().then(function(ip){
      voteData.IP = ip.data;

      $scope.setStorage(voteData);

      for (var choice in $scope.choiceVotes){
        if($scope.choiceVotes[choice]){
          voteData.votes.push(choice);
        }
      }

    }).then(function(){
      Polls.pollVote(voteData).then(function(poll){
        $scope.poll = poll;
        console.log('POLL AFTER VOTE SAVE:', $scope.poll);
      })
    }).then(function(){
      $scope.didUserVote();
    })
  };

  $scope.didUserVote = function(){
    localStorage.getItem('PollFly')
  };
});
