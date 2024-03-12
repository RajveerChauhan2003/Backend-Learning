require('dotenv').config()
const express = require('express')
//import express from 'express'      // This is also a method
const app = express()

const port = 4000

app.get('/',(request,response)=>{
    response.send('Hello World')
})

app.get('/login',(req,res)=>{
    res.send('Welcome to Login Page')
})

app.get('/instagram',(req,res)=>{
    res.send('<h1>You have 400+ followers </h1>')
})

// whenever we add new app.get() we need to restart the server 

// app.listen(port,()=>{
//     console.log("Example app listening on port : ",port)
// })      // for normal use 

app.listen(process.env.PORT,()=>{
    console.log("Example app listening on port : ",port)
})      // for production grade application

