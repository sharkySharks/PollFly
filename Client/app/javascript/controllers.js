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
      var poll = $scope.poll;
      if(poll.question.length > 0){
        var count = 0;

        for(var i = 0, len = poll.choices.length; i < len; i++){
          if(poll.choices[i].text.length > 0){
            count++
          }
        }

        if(count > 1){ 
          NewPolls.createNew(poll)
          .then(function(savedPoll){
            $scope.poll = {
              question: '',
              choices: [{text: ''}, {text: ''}, {text: ''}]
            };
            // when routing is figured out, alert the user of
            // where they can find their new poll w/ a link
            console.log(savedPoll) // mongo id returned
          })
        } else {
          alert('Please enter at least two choices.')
        }

      } else {
        alert('Please enter a question.')
      }


    };

  // contains functions that directly manipulate the view
  // calls function in services/factories (model)
    // get access to the factories by including the name in the 
    // parameters of this function, see docs

});