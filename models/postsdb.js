const mongoose = require('mongoose');
const Schema = mongoose.schema();

const PostSchema = new Schema({

    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    caption:
    {
        type: String
    },
    name:
    {
        type:String
    },
    avatar:
    {
       type: String
    },
    Photos:
    {
        type: String,
        require: true
    },
    likes: [
        { 
            user:{
                type: Schema.Types.ObjectId,
                ref:'users'
                 } 
        }
    ],
    comments:[
        {
            user:{
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            text:{
                type: String,
                require: true
            },
            name:
            {
                type: String
            },
            avatar:
            {
                type: String
            },
            date:{
                type:date,
                default: Date.now
            }
        }
    ],
    date:{
        type: Date,
        default: Date.now
    }

});
  module.exports = Post = mongoose.model('posts',PostSchema);