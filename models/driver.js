const mongoose = require('mongoose')
const Schema = mongoose.Schema


const DrivingSchema = new Schema({
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
      licensePicture: {
        data: Buffer,
        contentType: String
      },
      password: {
        type: String,
        required: true
      },
})


const Driver = mongoose.model("driving", DrivingSchema);

module.exports = Driver;