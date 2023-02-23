import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    title : {
        type: String
    },
    description : {
        type: String
    },
    creator : {
        type: String
    },
    tags : {
        type: Array
    },
    selectedFile : {
        type: String
    },
    // description: String,
    // creator: String,
    // tags: [String],
    popularity: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});


const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;