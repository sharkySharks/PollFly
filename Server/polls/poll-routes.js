var pollFunctions = require('./poll-functions');

module.exports = function (polls){
  polls.post('/', pollFunctions.saveNewPoll);

  //for testing
  polls.post('/db', pollFunctions.saveNewPoll);
}