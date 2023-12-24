const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./models/user')

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://rkkumaran834:Kumaran123@cluster0.7xduxun.mongodb.net/?retryWrites=true&w=majority/user")

app.post('/login',(req,res) => {
    const {email,password} = req.body;
    UserModel.findOne({email: email})
    .then((user)=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("Success")
        }
})
})

app.post('/register',(req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})
