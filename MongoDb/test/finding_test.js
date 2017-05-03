// const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');



describe('Finding records', function(){

  let char;
  beforeEach(function(done){
      char = new MarioChar({
      name:"Luffy",
      bounty: 300,
    });


    char.save().then(function(){
      assert(!char.isNew);
      done();
    });
  });

  it('Find one record from the database', function(done){

    MarioChar.findOne({name:'Luffy'}).then(function(result){
      assert(result.name === 'Luffy');
      done();
    });

  });

  it('Find one record by ID from the database', function(done){

    MarioChar.findOne({_id: char._id}).then(function(result){
      assert(result._id.toString() === char._id.toString()); // must toString because these are obj
      done();
    });

  });

});
