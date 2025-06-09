
const User  = require("../model/User")

exports.postUserInfo = async (req,res) => {
    try {
        const {name,email,age} = req.body

        if (!name){
            return res.status(422).json({error:"Please enter your name"})
        }

        if (!email){
            return res.status(422).json({error:"Please enter your email"})
        }

        if (!age){
            return res.status(422).json({error:"Please enter your age"})
        }
        const userInfo = new User({
            name,
            email,
            age
        })

        const userPostResult = await User.create(userInfo)
        res.status(201).json(userPostResult)

    } catch (error) {
        res.status(400).json({error: "Went wrong"})
    }
}