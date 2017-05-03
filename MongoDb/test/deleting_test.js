// const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');



describe('Deleting records', function(){

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

  it('Delete one record from the database', function(done){

    MarioChar.findOneAndRemove({name:'Luffy'}).then(function(){
      MarioChar.findOne({name:'Luffy'}).then(function(result){
        assert(result === null);
        done();
      })
    });

  });


});
