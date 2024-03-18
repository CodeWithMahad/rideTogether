const Driver = require('../models/dummy')

const getdata= async (req,res) => {

    try {
        console.log(req.body)
        const {email, password} = req.body
        const userExitst= await Driver.findOne({email})
        if(userExitst){
            res.status(400).json({msg:'user already esixst'})
        }
        await Driver.create({email, password})
        res.status(200).json({Driver})
    } catch (error) {
        console.log(error)
    }
}
module.exports = getdata