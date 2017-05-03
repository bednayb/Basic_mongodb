// const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

describe('demo test 1', function(){

  it('2 + 3 === 5', function(){
    assert(2 + 3 === 5);
  });

});

describe('demo test 2', function(){

  it('2 + 2 !== 5', function(){
    assert.notEqual(2 + 2 == 5);
  });

});

describe('Saving records', function(){

  let char;

  it('Save records to databases', function(done){
      char = new MarioChar({
      name:"Luffy",
      bounty: 300,
    });

    char.save().then(function(){
      assert(!char.isNew);
      done();
    });


  });

});
