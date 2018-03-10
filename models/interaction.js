/**
 * Created by EminAyar on 1.03.2018.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var sch = new Schema({
    type: Number, // 0 for view started, 1 for view completed, 2 for like, 3 for dislike
    fromWhere: Number, //cards 4 trends 5 profile 6
    fbId: String,
    post: { type: String, ref: 'Video' },
    user: { type: String, ref: 'User' },
    whose : String,
    createdAt: Date,
});

var Interaction = mongoose.model('Interaction', sch);

module.exports = Interaction;