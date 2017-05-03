// const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');



describe('Updating records', function(){

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

  it('Update one record in the database', function(done){

    MarioChar.findOneAndUpdate({name:'Luffy'}, {name:'Zoro'}).then(function(){
      MarioChar.findOne({_id:char._id}).then(function(result){
        assert(result.name === 'Zoro');
        done();
      });
    });
  });

  it('Increments bount by 150', function(done){

    MarioChar.update({},{$inc:{bounty:150}}).then(function(){
      MarioChar.findOne({name:'Luffy'}).then(function(record){
        assert(record.bounty === 450);
        done();
      });
    });
  });
});
