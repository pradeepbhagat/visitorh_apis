var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./app/routes/index');
var usersRouter = require('./app/routes/users');
var societyRouter = require('./app/routes/societyRouter');
var buildingRouter = require('./app/routes/buildingRouter');
var flatRouter = require('./app/routes/flatRouter');
var memberRouter = require('./app/routes/memberRouter');
var visitorRouter = require('./app/routes/visitorRouter');
var flatTypeRouter = require('./app/routes/flatTypeRouter');
var visitorTypeRouter = require('./app/routes/visitorTypeRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/society', societyRouter);
app.use('/building', buildingRouter);
app.use('/flat', flatRouter);
app.use('/member', memberRouter);
app.use('/visitor', visitorRouter);
app.use('/flatType', flatTypeRouter);
app.use('/visitorType', visitorTypeRouter);

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

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

module.exports = app;
