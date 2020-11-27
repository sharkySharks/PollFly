'use strict';

angular.module('PollFly.votePoll', ['ngRoute'])

.controller('PollForVote', function($scope, $routeParams, $location, PollData, Polls, PollResults){

  $scope.poll = PollData.get({pollId: $routeParams.pollId});

  $scope.userVoted = false;

  $scope.pollId = $location.absUrl().split('/').slice(-1).join('');

  $scope.resultLink = $location.absUrl() + '/result';

  $scope.didUserVote = function(){
    var storage = JSON.parse(localStorage.getItem('PollFly'));
    var pollId  = $location.absUrl();

    for(var prop in storage){
      if(storage[prop].hasOwnProperty($scope.pollId)){
        $scope.userVoted = true;
      }  
    }
  };

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
        currentStorage[voteData.IP] = {};
        currentStorage[voteData.IP][voteData.pollId] = true;
      } else {
        currentStorage[voteData.IP][voteData.pollId] = true;
      }
      localStorage.setItem('PollFly', JSON.stringify(currentStorage));
    }
  };

  $scope.vote = function(){
    var voteData = {
      pollId: $scope.poll._id,
      votes: [], // <-- choice._id's
      IP: ''
    };

    for (var choice in $scope.choiceVotes){
      if($scope.choiceVotes[choice]){
        voteData.votes.push(choice);
      }
    }

    if (voteData.votes.length){
      Polls.getIPAddress().then(function(ip){
        voteData.IP = ip.data;
        $scope.setStorage(voteData);
      }).then(function(){
        Polls.pollVote(voteData).then(function(poll){
          $scope.poll = poll;
        })
      }).then(function(){
        $scope.didUserVote();
      });
    } else {
      alert('Select one option before trying to submit your vote.');
    }
  };
});
