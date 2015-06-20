'use strict';

angular.module('PollFly.createPolls', ['ngRoute'])

.controller('NewPollController', function($scope, NewPolls){

    $scope.poll = {
      question: '',
      choices: [{text: ''}, {text: ''}, {text: ''}]
    };

    $scope.addChoice = function(){
      $scope.poll.choices.push({text: ''})
    };

    $scope.createNewPoll = function(){

      NewPolls.createNew($scope.poll);

    };

  // contains functions that directly manipulate the view
  // calls function in services/factories (model)
    // get access to the factories by including the name in the 
    // parameters of this function, see docs

});