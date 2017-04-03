var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Defining the schema with 2 columns, text and completed
var taskSchema = new Schema({
    text: String,
    completed: Boolean
});

// Compile taskSchema into mongoose model with name 'Task'
var Task = mongoose.model('Task', taskSchema);

// Export the Task so other parts of project can use it
module.exports = Task;