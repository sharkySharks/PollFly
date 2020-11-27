var bodyParser = require('./node_modules/body-parser');
var express    = require('./node_modules/express');
var mongoose   = require('mongoose');
var app        = express();

mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/PollFly', {
  useNewUrlParser: true
}); // connects to db called PollFly

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: __dirname + '/client'});
});

require('./server/middleware')(app, express);

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Serving at localhost:%s', port);
});
