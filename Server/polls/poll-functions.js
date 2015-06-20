var Poll = require('./Poll');

function saveNewPoll (req, res){
  var newPoll = req.body;

  var poll = new Poll(newPoll).save(function(err, poll){
    console.log('New Poll Saved: ', newPoll);
    res.send(poll);
  });

}

module.exports = {
  saveNewPoll: saveNewPoll
};