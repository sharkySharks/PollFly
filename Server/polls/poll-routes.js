var pollFunctions = require('./poll-functions');

module.exports = function (polls){
  polls.post('/newPoll', pollFunctions.saveNewPoll);

};