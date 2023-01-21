import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 25
    },
    

    lastName: {
        type: String,
        required: true,
        min: 3,
        max: 25
    },

    email: {
        type: String,
        required: true,
        max: 50
    },

    password: {
        type: String,
        required: true,
        min: 6,
        max: 75
    },

    profilePic: {
        type: String,
        default: ''
        
    },

    bio: {
        type: String,
        required: true,
        min: 50,
        max: 125
    }
} , {timestamps: true})

const User = mongoose.model("User", userSchema)

export default User;