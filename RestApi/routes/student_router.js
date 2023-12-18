import express from 'express'
import { createData, getData } from '../controllers/student_controller.js'
// import { createData, getData } from '../controllers/student_controller.js'
// import  { createData, getData } from '../Controllers/student_controller.js'


const student_router =express.Router()





student_router.get('/',getData)
student_router.post('/',createData)
// studentRouter.get('/:id',StudentController)
// studentRouter.put('/:id',StudentController)
// studentRouter.delete('/:id',StudentController)



export default student_router