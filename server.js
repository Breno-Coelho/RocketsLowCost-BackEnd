const { urlencoded } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const server = express()
const routes = require('./routes')
const path = require('path')



server.set('view engine', 'ejs')

server.use(express.static('public'))

server.set('views', path.join(__dirname, 'views'))

server.use(express.json())

server.use(express.urlencoded({ extended: true }))

server.use(routes)

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017').then(() => {console.log('Conectou com o BD')});

server.listen(3001);






