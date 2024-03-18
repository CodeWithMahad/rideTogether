const mongoose= require('mongoose')



const dataschema= new mongoose.Schema({
    email:String,
    password:String
})


const Driver= mongoose.model('data', dataschema)

module.exports = Driver