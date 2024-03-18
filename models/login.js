const mongoose = require('mongoose')
const Schema = mongoose.Schema


const LoginSchema= new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
      },
      password: {
        type: String,
        required: true
      },
})

const Login = mongoose.model('login', LoginSchema)
module.exports =Login


