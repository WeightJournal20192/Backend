const express = require('express')
const Userdb = require('../users/users-model')
const authRouter = require('../auth/auth-router')
const usersRouter = require('../users/users-router')







const server = express()


server.use(express.json())
server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)





server.get('/', (req,res) => {
    res.send('You are in!')


})




module.exports = server;
