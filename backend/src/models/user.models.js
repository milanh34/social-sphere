import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        username:{
            type: String,
            unique: true,
            required: true,
            index: true,
            trim: true,
        },
        name:{
            type: String,
            required: true,
            index: true,
        },
        password:{
            type: String,
            required: true,
        },
        profilepic:{
            type: String,
        },
        refreshToken:{
            type: String,
        },
    },
    {
        timestamps: true,
    },
);

export const User = mongoose.model('User', userSchema);