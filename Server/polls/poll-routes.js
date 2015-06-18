var pollFunctions = require('./poll-functions');

module.exports = function (polls){
  polls.post('/', pollFunctions.saveNewPoll);

  polls.get('/db', pollFunctions.saveNewPoll);
}