var Poll = require('./Poll');

function saveNewPoll (req, res){
  // Example data to test db
  var example = {
    question: 'Is this going to go into the db?',
    choices: [{ text: 'Perhaps', votes: [] }, 
              { text: 'Unlikely', votes: []},
              { text: 'If I am lucky', votes: []}]
  };

  var poll = new Poll({
    question    : example.question,
    choices     : example.choices
  }).save(function(err, poll){
    res.send(poll);
  });

}

module.exports = {
  saveNewPoll: saveNewPoll
};