var pollFunctions = require('./poll-functions');

module.exports = function (polls){
  polls.post('/', pollFunctions.saveNewPoll);

  polls.post('/db', pollFunctions.saveNewPoll);
}