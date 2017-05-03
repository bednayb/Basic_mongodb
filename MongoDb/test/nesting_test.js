const assert = require('assert');
const mongoose = require('mongoose');
const Pirates = require('../models/pirates');


// Describe our tests

describe('Nesting records', function(){

  beforeEach(function(done){
    mongoose.connection.collections.pirates.drop(function(){
      done();
    })
  })

  it('Creates an author with sub-documents',function(done){

    var pat = new Pirates({
      team:'Mugiwara',
      Crews:[
        {name:'Luffy', bounty: 500000000, haki:true},
        {name:'Zoro', bounty: 320000000, haki:true},
        {name:'Chopper', bounty: 100, haki:false},
      ]
    });

    pat.save().then(function(){
      Pirates.findOne({team:'Mugiwara'}).then(function(record){
        assert(record.Crews.length === 3);
        done();
      });
    })
  });

  it('Add a new crew member',function(done){

    var pat = new Pirates({
      team:'Mugiwara',
      Crews:[
        {name:'Luffy', bounty: 500000000, haki:true},
        {name:'Zoro', bounty: 320000000, haki:true},
        {name:'Chopper', bounty: 100, haki:false},
      ]
    });

    pat.save().then(function(){
      Pirates.findOne({team:'Mugiwara'}).then(function(record){
        //add a crew member
        record.Crews.push( {name:'Sanji', bounty: 177000000, haki:true});
        record.save().then(function(){
          Pirates.findOne({team:'Mugiwara'}).then(function(result){
            assert(result.Crews.length === 4);
            done();
        });

      });
    })
  });
});
});
