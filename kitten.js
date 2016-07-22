var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kittenSchema = new Schema({
  name: String
});
kittenSchema.methods.speak=function(){
  var greeting = this.name ? 'Meow name is '+ this.name : "I didn't get a name";
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittenSchema);

module.exports = Kitten;
