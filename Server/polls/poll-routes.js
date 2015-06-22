var pollFunctions = require('./poll-functions');

module.exports = function (polls){
  polls.post('/newPoll', pollFunctions.saveNewPoll);
  polls.post('/vote', pollFunctions.vote);
  polls.get('/:pollId', pollFunctions.getPoll);
  polls.get('/:pollId/result', pollFunctions.getPoll);

  // polls.get('*', function(req, res){
  //   res.send('No can do. 404-resource not found.', 404);
  // });
};