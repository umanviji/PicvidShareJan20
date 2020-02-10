const mongoose = require('mongoose');
const schema = mongoose.schema;

const ProfileSchema = new schema(
        { 
            user:
            {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            posts:
            {
                type: Schema.Types.ObjectId,
                ref: 'posts'
            },
            website:
            {
                type: String
            },
            bio:
            {
                type: String
            },
            location:
            {
                type: String
            }

        }
)
    module.exports = Profile = mongoose.model('profile',ProfileSchema);