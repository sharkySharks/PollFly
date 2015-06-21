
angular.module('PollFly.services', ['ngResource'])

.factory('Polls', function($http){

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

  var pollVote = function(voteData){

    return $http({
      method: 'PUT',
      url: 'polls/:pollId/vote',
      data: voteData
    })
  };

  return {
    createNew: createNew,
    pollVote: pollVote
  }
})

.factory('PollData', function($resource){

  return $resource('polls/:pollId', {}, {
    query: {
      method: 'GET',
      params: { pollId: 'polls'}, 
      isArray: true
    }
  })
});