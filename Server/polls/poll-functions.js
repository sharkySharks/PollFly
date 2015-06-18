var Polls = require('../models.Poll');

function saveNewPoll (req, res){
  // Example data to test db
  var example = {
    question: 'Is this going to go into the db?',
    choices: [{ text: 'Perhaps', votes: [] }, 
              { text: 'Unlikely', votes: []},
              { text: 'If I am lucky', votes: []}]
  };

  // need to make a function that returns a promise,
  // then wrap around this function to save to db
    return Poll.fromRequest(example);

  .then(function(poll){
    poll.save();
  })

}

module.exports = {
  saveNewPoll: saveNewPoll
};