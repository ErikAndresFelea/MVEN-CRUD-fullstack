const mongoose = require('mongoose');
const { Schema } = mongoose;

// Tell mongoose what model we are using
const Task = new Schema({
    title: String,
    description: String,
});

module.exports = mongoose.model('Task', Task);