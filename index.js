const express = require('express')
const fast2sms = require('fast-two-sms')


const app = express();

require('dotenv').config()  

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))

app.post('/sendMessage', async(req,res)=>{
    var options = {authorization : process.env.API_KEY , message : req.body.message ,  numbers : [req.body.number]} 
const response =await fast2sms.sendMessage(options) 
    res.send(response);
})

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.listen(3001,()=>{
    console.log("Listening to port number 3000")
})