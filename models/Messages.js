import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    from:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },

    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    subject: {
        type: String,
        default: "No Subject"
    },

    text: {
        type: String,
        required: true
    },

    seen: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        required: true
    },

    fromString:{
        type:String,
        required: true
    }

})

const Message  = mongoose.model("Message", messageSchema);

export default Message;