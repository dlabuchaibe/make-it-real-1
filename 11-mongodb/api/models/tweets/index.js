const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collection = 'tweets';
const tweetSchema = new Schema({
    content:{
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Tweet = mongoose.model(collection, tweetSchema);

module.exports = Tweet;
