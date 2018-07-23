var mongoose = require( 'mongoose' );

var videoSchema = new mongoose.Schema({
  title: String,
  color: String,
  genre: {
    type: Mongoose.Schema.Types.ObjectId, 
    ref: 'Genre'
  }
});

mongoose.model('Video', videoSchema);
