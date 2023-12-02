const mongoose = require("mongoose");


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    completed:{
        type: Boolean,
        default: false,
    },
})
   
const Task = mongoose.model("task", taskSchema);
module.exports = Task;
