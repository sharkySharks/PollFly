
angular.module('PollFly.services', ['ngResource'])

.factory('NewPolls', function($http){

  var createNew = function(pollData){
    console.log('pollData', pollData);

    return $http({
      method: 'POST',
      url: 'polls/newPoll',
      data: pollData
    })
    .then(function(res){
      return res.data
    });
  };

  return {
    createNew: createNew
  }
})

.factory('VotePoll', function($resource){

  return $resource('polls/:pollId', {}, {
    query: {
      method: 'GET',
      params: { pollId: 'polls'}, 
      isArray: true
    }
  })

})