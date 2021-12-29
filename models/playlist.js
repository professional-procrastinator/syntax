import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:false,
        maxlength:200
    },
    songs:{
        type:Array,
        required:true
    },
    owner:{
        type:String,
        required:true
    },
    image:{
        type: String,
        required:false
    }
},{timestamps:true})


const Playlist = mongoose.models.Playlist || mongoose.model('Playlist', PlaylistSchema);
module.exports = Playlist;