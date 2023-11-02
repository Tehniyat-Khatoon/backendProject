import express from 'express'
import  { createLoginData,getLoginData } from '../Controllers/loginController.js'
const LoginRouter =express.Router()



LoginRouter.post('/loginUser',createLoginData)
LoginRouter.get('/',getLoginData)

export default LoginRouter