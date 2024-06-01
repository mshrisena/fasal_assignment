const express = require('express');
const userRoutes = express.Router()
const { CreateUser, updateUser, UserLogin ,getUserName} = require('../controller/user');

userRoutes.post('/create', CreateUser);
userRoutes.patch('/update', updateUser)
userRoutes.get('/Login', UserLogin)
userRoutes.get("/:id",getUserName)

module.exports = userRoutes