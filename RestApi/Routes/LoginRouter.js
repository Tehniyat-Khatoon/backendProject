import express from 'express'
import  { createLoginData,getLoginData } from '../Controllers/loginController.js'
const loginRouter =express.Router()



loginRouter.post('/loginUser',createLoginData)
loginRouter.get('/',getLoginData)

export default loginRouter