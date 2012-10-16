
/**
 * Module dependencies.
 */

var express = require('express'),
    router = require('./modules/router'),
    database = require('./modules/database'),
    http = require('http'),
    path = require('path'),
    mysql = require('mysql'),
    fs = require('fs'),
    app = express();

var client = mysql.createClient({
    host: '127.0.0.1',
    user: 'user1',
    password: 'aaa123',
    database: 'bulletin_board'
});


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

    router.route(app, fs);
    database.connect(app, client);
    /*
        필요한 모듈
        1. css 묶는 모듈
        2. javascript 묶는 모듈
        3. 
    */
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
