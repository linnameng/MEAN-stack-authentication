var mongoose = require( 'mongoose' );

var userVideoSchema = new mongoose.Schema({
    user: {
        type: Mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    video: {
        type: Mongoose.Schema.Types.ObjectId, 
        ref: 'Video'
    },
    viewed: {
        type: boolean, 
        default: false
    }
});

mongoose.model('UserVideo', userVideoSchema);
