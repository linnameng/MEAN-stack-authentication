var mongoose = require( 'mongoose' );

var genreSchema = new mongoose.Schema({
  name: String
});

mongoose.model('Genre', genreSchema);