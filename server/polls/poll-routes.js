var pollFunctions = require('./poll-functions');

module.exports = function (polls){
  polls.post('/', pollFunctions.saveNewPoll);
  polls.post('/votes', pollFunctions.vote);
  polls.get('/:pollId', pollFunctions.getPoll);
  polls.get('/:pollId/result', pollFunctions.getPoll);
};