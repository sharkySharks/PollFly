var Polls = require('./Poll');

function saveNewPoll (req, res){
  var newPoll = req.body;

  var poll = new Polls.Poll(newPoll).save(function(err, poll){
    if(err) console.log('error:', err);
    
    console.log('New Poll Saved: ', poll);
    res.send(poll);
  });

}

function getPoll (req, res){
  var pollId = req.params.pollId;

  Polls.Poll.findById(pollId).then(function(poll){
    res.send(poll);
  });
}

function vote (req, res){
  var voteData = req.body;

  Polls.Poll.findById(voteData.pollId).then(function(poll){
    voteData.votes.map(function(vote){
      var choice = poll.choices.id(vote);
      choice.votes.push({ip: voteData.IP});
    });
    poll.save().then(function(poll){
      res.send(poll);
    });
  });
}

module.exports = {
  saveNewPoll: saveNewPoll,
  getPoll: getPoll,
  vote: vote
};