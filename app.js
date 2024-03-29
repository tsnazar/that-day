const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const exphbs = require('express-handlebars');
const redis = require('redis');



const indexRouter = require('./routes/index');

const app = express();

if(process.env.NODE_ENV==='production'){
  var client = redis.createClient(process.env.REDIS_URL);
} else {
  var client = redis.createClient(6379);
}

// TODO: Allow images from wiki
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      'img-src': ["'self'", "https://upload.wikimedia.org/"],
      'script-src': ["'self'", "https://code.jquery.com/"]
    }
  }
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
  extname: '.hbs',
  helpers: require('./config/handlebars-helpers.js')
}));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  req.redis = client;
  next();
});


app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
