import express from 'express'
// import multer from 'multer'
// import path from 'path'
import  { createAdmissionForm, getAdmissionForm } from '../Controllers/AddmissionForm1Controller.js'
const addmissionForm1Router=express.Router()

// const storage =multer.diskStorage({
//     destination:'./upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(req.file.originalname)}`)
//     }
// })
// const upload = multer({
//     storage:storage
// })

addmissionForm1Router.get('/',getAdmissionForm)
//admin panel
addmissionForm1Router.post('/',createAdmissionForm)
// addmissionForm1Router.post('/',upload.single('images'),uploadImage)

// addmissionForm1Router.post("/update-profile",(req, res) => {
//     // let username = req.body.username;
//     let userPicture = req.body.userPicture;
//     console.log(userPicture);
//     res.send(
//         // Your username is: ${username}
//         // `Uploaded image file name is ${userPicture}`
//         {userPicture},
//         console.log(`${userPicture}`)
//         );
//   } );
// addmissionForm1Router.get('/:id',AdmissionForm1Controller)
// addmissionForm1Router.put('/:id',AdmissionForm1Controller)
// addmissionForm1Router.delete('/:id',AdmissionForm1Controller)




export default addmissionForm1Router