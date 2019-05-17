const mongoose = require('mongoose');
const schema = mongoose.Schema;

const proSchema = new Schema({
    name: String,
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'task'
    }]
});

const project = mongoose.model('project', proSchema);

module.exports = project;