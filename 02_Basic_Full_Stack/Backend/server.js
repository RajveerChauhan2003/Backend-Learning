// const express = require('express')   // common js file type
import express from 'express'       // after doing "type" : "module" in package.json file
const app = express()
const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send("Helllooo")
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:"A joke",
            content:"This is joke 1"
        },
        {
            id:2,
            title:"A joke",
            content:"This is joke 2"
        },
        {
            id:3,
            title:"A joke",
            content:"This is joke 3"
        },
        {
            id:4,
            title:"A joke",
            content:"This is joke 4"
        },
        {
            id:5,
            title:"A joke",
            content:"This is joke 5"
        }
    ]
    res.json(jokes)

})

app.listen(port,()=>{
    console.log(`Basic full stack app listening on http://localhost:${port}` )
})