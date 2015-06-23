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
    var poll = $scope.poll;

    if(poll.question.length > 0){
      poll.choices = poll.choices.filter(function(y){
        return y.text.length > 0;
      });

      var count = 0;

      for(var i = 0, len = poll.choices.length; i < len; i++){
        if(poll.choices[i].text.length > 0){
          count++
        }
      }

      if(count > 1){ 
        Polls.createNew(poll).then(function(savedPoll){
          $scope.poll = {
            question: '',
            choices: [{text: ''}, {text: ''}, {text: ''}],
            multiple: false
          };

          $scope.voted = true;
          
          var loc = $location.absUrl();
          var path = $location.path();

          $scope.pathAlert.push(loc.slice(0,loc.indexOf(path)) + '/polls/' + savedPoll._id);
        })
      } else {
        alert('It is more fun when you have at least two choices!');
      }
    } else {
      alert('Did you forget your question?');
    }
  };
});
