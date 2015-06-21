'use strict';

angular.module('PollFly.createPolls', ['ngRoute'])

.controller('NewPollController', function($scope, $routeParams, $location, Polls){

  $scope.poll = {
    question: '',
    choices: [{text: ''}, {text: ''}, {text: ''}],
    multiple: false
  };

  $scope.voted = false;

  $scope.addChoice = function(){
    $scope.poll.choices.push({text: ''})
  };

  $scope.pathAlert = [];

  $scope.createNewPoll = function(){
    $scope.poll.choices = $scope.poll.choices.filter(function(y){
      return y.text.length>0;
    });
    var poll = $scope.poll;
    if(poll.question.length > 0){
      var count = 0;

      for(var i = 0, len = poll.choices.length; i < len; i++){
        if(poll.choices[i].text.length > 0){
          count++
        }
      }

      if(count > 1){ 
        Polls.createNew(poll)
        .then(function(savedPoll){
          $scope.poll = {
            question: '',
            choices: [{text: ''}, {text: ''}, {text: ''}],
            multiple: false
          };

          $scope.voted = true;
          
          var loc = $location.absUrl();
          var path = $location.path();

          $scope.pathAlert.push(loc.slice(0,loc.indexOf(path)) + '/polls/' + savedPoll._id);

          console.log('savedPoll:', savedPoll); 

        })
      } else {
        alert('Please enter at least two choices.')
      }

    } else {
      alert('Please enter a question.')
    }
  };
});
