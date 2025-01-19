//Task Models

const mongoose = require("mongoose");


const taskSchema = new mongoose.Schema({
    title:{type:String,required:true},
    completed:{type:Boolean,default:false},
    dueDate:{type:Date,required:true},
    createdAt:{type:Date,default:Date.now}
})

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;