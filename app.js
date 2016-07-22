var mongoose = require('mongoose');
var Kitten = require('./kitten')
mongoose.connect('mongodb://localhost/test');
var db= mongoose.connection;

db.once('open', function (){
  console.log('connected to mongodb');
});

var silence = new Kitten({name: 'silence'});
console.log(silence.name);

var fluffy = new Kitten({name: "fluffy"});
fluffy.speak();

silence.save(function (err, silence){
  if (err)return console.log("save err", err)
  silence.speak();
});
fluffy.save(function(err, fluffy){
  if(err)return console.log("save err", err);
  fluffy.speak();
});

Kitten.find(function(err, Kittens){
  if (err)return console.log('finding err', err);
  console.log(Kittens);
});
