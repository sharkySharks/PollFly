var bodyParser = require('body-parser');

module.exports = function(app, express){
  var polls = express.Router();
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use('/polls', polls);
  require('./polls/poll-routes.js')(polls);

  // app.get('*', function(req, res, next){
  //   var err = new Error();
  //   err.status = 404;
  //   next(err);
  // });

  // app.use(function(err, req, res, next){
  //   if (err.status !== 404){
  //     return next();
  //   }
  //   res.send(err.message || '** no unicorns here **');
  // });
};