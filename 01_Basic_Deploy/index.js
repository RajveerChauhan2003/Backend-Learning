require('dotenv').config()
const express = require('express')
//import express from 'express'      // This is also a method
const app = express()

const githubData = {
    "login": "RajveerChauhan2003",
    "id": 108219205,
    "node_id": "U_kgDOBnNLRQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/108219205?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/RajveerChauhan2003",
    "html_url": "https://github.com/RajveerChauhan2003",
    "followers_url": "https://api.github.com/users/RajveerChauhan2003/followers",
    "following_url": "https://api.github.com/users/RajveerChauhan2003/following{/other_user}",
    "gists_url": "https://api.github.com/users/RajveerChauhan2003/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/RajveerChauhan2003/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/RajveerChauhan2003/subscriptions",
    "organizations_url": "https://api.github.com/users/RajveerChauhan2003/orgs",
    "repos_url": "https://api.github.com/users/RajveerChauhan2003/repos",
    "events_url": "https://api.github.com/users/RajveerChauhan2003/events{/privacy}",
    "received_events_url": "https://api.github.com/users/RajveerChauhan2003/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Rajveer Singh Chauhan",
    "company": null,
    "blog": "",
    "location": "Jhansi",
    "email": null,
    "hireable": null,
    "bio": "Hi there , \r\nI am Rajveer , currently a 3rd year  student at GLA University , pursuing Bachelor's degree in Computer Science and Engineering .",
    "twitter_username": "Rajveer57555050",
    "public_repos": 9,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2022-06-26T10:33:51Z",
    "updated_at": "2024-02-23T15:37:51Z"
  }

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

app.get('/github',(req,res)=>{
    res.json(githubData)
})

// whenever we add new app.get() we need to restart the server 

// app.listen(port,()=>{
//     console.log("Example app listening on port : ",port)
// })      // for normal use 

app.listen(process.env.PORT,()=>{
    console.log("Example app listening on port : ",port)
})      // for production grade application

