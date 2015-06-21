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
  
  for(var i = 0; i < voteData.votes.length; i++){
    Polls.Choice.findById(voteData.votes[i]).then(function(choice){
      choice.votes.push(voteData.IP);
      choice.save();
    })
  }
   
  res.send('votes recorded for poll_id:', voteData.pollId);
}

module.exports = {
  saveNewPoll: saveNewPoll,
  getPoll: getPoll,
  vote: vote
};