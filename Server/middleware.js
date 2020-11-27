var bodyParser = require('../node_modules/body-parser');

module.exports = function(app, express){
  var polls = express.Router();
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use('/polls', polls);
  require('./polls/poll-routes.js')(polls);
};