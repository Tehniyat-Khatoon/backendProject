import express from 'express'
import  { createLoginData,getLoginData } from '../controllers/login_controller.js'
const login_router =express.Router()



login_router.post('/loginUser',createLoginData)
login_router.get('/',getLoginData)

export default login_router