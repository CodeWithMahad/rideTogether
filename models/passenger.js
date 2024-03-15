const mongoose = require('mongoose')
const Schema = mongoose.Schema


const PassengerSchema = new Schema({
    profilePicture: {
        data: Buffer, // Store binary data for the image
        contentType: String // Store content type (e.g., image/jpeg, image/png)
      },
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      phoneNumber: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
      },
      gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
      },
      CNICPicture: {
        data: Buffer,
        contentType: String
      },
      password: {
        type: String,
        required: true
      },
})

const Passenger = mongoose.Model('Passenger', PassengerSchema)

module.exports = Passenger