// JavaScript File
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  address: String,
  city: String,
  state: String,
  country: String,
  zipCode: String,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;

var roomSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  address: String,
  city: String,
  state: String,
  country: String,
  zipCode: String,
  amenities: Array,
  houseType: String,
  numRoom: Number,
  owner: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Accomodation', roomSchema);

var adventureSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  address: String,
  city: String,
  state: String,
  country: String,
  zipCode: String
});

module.exports = mongoose.model('Adventure', adventureSchema);

var reviewSchema = new Schema({
  target:{ 
        type: String, 
        enum: ['listing', 'host', 'guest'] },
  rating:{
        type: Number,
        min: [1, 'The range for rating is 1-5.'],
        max: 5
      },
  feedback: String,
  reviewer: {type: Schema.Types.ObjectId, ref: 'User'},
  listing: {type: Schema.Types.ObjectId, ref: 'Accomodation'}
});

module.exports = mongoose.model('Review', reviewSchema);

var blogSchema = new Schema({
  title: String,
  date: Date,
  author: String,
  text: String()
});

module.exports = mongoose.model('Blog', blogSchema);