const mongoose = require('mongoose');

//ES6 PROMISES

mongoose.Promise = global.Promise;

before(function(done){
  //Connect to mongodb
  mongoose.connect('mongodb://localhost/testaroo'); // doesn exist yet
  mongoose.connection.once('open', function(){
    console.log("connection has been made");
    done();
  }).on('error', function(error){
    console.log("Connection error");
  });
});

//Drop the character collection before each test
beforeEach(function(done){
  //Drop the collection (mariochar + s (pluralise!))
  mongoose.connection.collections.mariochars.drop(function(){
      done();
  });
});
