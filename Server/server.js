var bodyParser = require('body-parser');
var express    = require('express');
var mongoose   = require('mongoose');
var app        = express();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/PollFly', {
  useMongoClient: true
}); // connects to db called PollFly

app.use(express.static(__dirname + '/../Client'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: __dirname + '/../Client/app'});
});

require('./middleware')(app, express);

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Serving at port %s', port);
});
