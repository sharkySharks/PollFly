var pollFunctions = require('./poll-functions');

module.exports = function (polls){
  polls.post('/newPoll', pollFunctions.saveNewPoll);
  //polls.put('/')
  polls.get('/:pollId', pollFunctions.getPoll);
  //polls.get('/:pollId/result', pollFunctions.)
};