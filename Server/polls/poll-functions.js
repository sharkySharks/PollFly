var Poll = require('./Poll');

function saveNewPoll (req, res){
  var newPoll = req.body;

  var poll = new Poll(newPoll).save(function(err, poll){
    if(err) console.log('error:', err);
    
    console.log('New Poll Saved: ', poll);
    res.send(poll);
  });

}

function getPoll (req, res){
  console.log('req.params.pollId', req.params.pollId);
  var pollId = req.params.pollId;

  Poll.findById(pollId).then(function(poll){
    console.log('Poll requested:', poll);
    
    res.send(poll);
  });
}

module.exports = {
  saveNewPoll: saveNewPoll,
  getPoll: getPoll
};