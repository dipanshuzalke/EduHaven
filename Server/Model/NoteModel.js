import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    content: {
        type: String,
        required: true, 
    },
    tags: {
        type: [String], 
        default: [], 
    },
    createdAt: {
        type: Date,
        default: Date.now, 
    },
    updatedAt: {
        type: Date, 
        default: Date.now,
    },
});



const Note = mongoose.model("Note", noteSchema);

export default Note;