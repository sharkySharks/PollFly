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
  choices   : [choiceSchema],
  multiple  : Boolean
});

var Poll = mongoose.model('Poll', pollSchema);

module.exports = {
  Poll: Poll
};