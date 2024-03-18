require('dotenv').config();
const express = require('express')
const server = express();
// const router = require('../route/dummyroute');
// const driver = require('../models/driver')
const getdata = require('../controller/dummycontroller')
const mongoose  = require('mongoose');







//middleware 
server.use(express.json())



//route middleware 
server.use('/api/auth', getdata)


// const URL = process.env.MONGODB_URL;
const URL = 'mongodb+srv://Manee:mentallove_06@cluster0.o4hmrev.mongodb.net/FYPRider?retryWrites=true&w=majority&appName=Cluster0'

const ConnectDB = async ()=>{
try {
    await mongoose.connect(URL);
    console.log('connection done')
} catch (error) {
    console.error('connection failed')
    process.exit(0);
}
}


//server started
const PORT = 5000;
ConnectDB().then(()=>{
server.listen(PORT,()=>{
    console.log(`server are run at Port: ${PORT}`)
})
})