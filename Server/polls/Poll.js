var mongoose      = require('mongoose');
var Schema        = mongoose.Schema;
var voteSchema    = new Schema({ 
  ip: String 
});
var choiceSchema  = new Schema({
  text      : String,
  votes     : [voteSchema]
});
var pollSchema    = new Schema({
  question  : { type: String, required: true },
  choices   : [choiceSchema]
});

var Poll = mongoose.model('Poll', pollSchema);

// Poll.fromRequest = function(req){
//   console.log('inside Poll.fromRequest: req', req);
//   return new Poll({
//     question    : req.question,
//     choices     : req.choices
//   })
// }

module.exports = Poll;

/*
should look like:

{
  question  : String,
  choices   : [
    {
      text  : String,
      vote  : [
        {
          ip: String 
        }
      ]
    },
    {
      text  : String,
      vote  : [
        {
          ip: String 
        }
      ]
    },
    {
      text  : String,
      vote  : [
        {
          ip: String 
        }
      ]
    }
  ]
}

*/