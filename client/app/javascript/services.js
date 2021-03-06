
angular.module('PollFly.services', ['ngResource'])

.factory('Polls', function($http){

  var createNew = function(pollData){
    return $http({
      method: 'POST',
      url: 'polls/',
      data: pollData
    })
    .then(function(res){
      return res.data
    });
  };

  var pollVote = function(voteData){
    return $http({
      method: 'POST',
      url: 'polls/votes',
      data: voteData
    }).then(function(res){
      return res.data;
    });
  };

  var getIPAddress = function(){
    return $http({
      method: 'GET',
      url: 'https://api.ipify.org'
    })
  }

  return {
    createNew: createNew,
    pollVote: pollVote,
    getIPAddress:  getIPAddress
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
})

.factory('PollResults', function($resource){
  return $resource('polls/:pollId/result', {}, {
    query: {
      method: 'GET',
      params: { pollId: 'polls'}, 
      isArray: true
    }
  })
});