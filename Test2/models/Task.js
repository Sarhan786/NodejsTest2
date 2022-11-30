const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const TaskSchema = new Schema({
    id : Number,
    title : String,
    is_completed : Boolean
 })

const TaskModel = mongoose.model("Task", TaskSchema);
module.exports = TaskModel