const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BulkTaskSchema = new Schema({
  task: [
    {
      id: Number,
      title: String,
      is_completed: Boolean,
    },
  ],
});

const TaskModel = mongoose.model("BulkTask", BulkTaskSchema);
module.exports = TaskModel;
