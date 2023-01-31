const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()


const UserController = require('./Controllers/UserController')


// Users
routes.post('/users/create', UserController.CreateUser)
routes.get('/users/findAll', UserController.FindAllUsers)
routes.post('/users/find', UserController.FindUser)




module.exports = routes


