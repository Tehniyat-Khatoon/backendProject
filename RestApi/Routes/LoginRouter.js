import express from 'express'
import  { createLoginData,getLoginData } from '../Controllers/LoginController.js'
const LoginRouter =express.Router()



LoginRouter.post('/loginUser',createLoginData)
LoginRouter.get('/',getLoginData)

export default LoginRouter