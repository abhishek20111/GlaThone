const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default:"User",
        require: true
    },
    email:{
        type: String,
        require: true
    },
    history:[{
        type: String,
        default: "Pervious data----------No"
    }] 

},{timestamps: true})

module.exports = mongoose.model('User_Schema2', userSchema);