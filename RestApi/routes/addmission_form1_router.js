import express from 'express'
import nodemailer from "nodemailer"
const addmission_form1_router=express.Router()
import cors from 'cors';
import { createAdmissionForm, getAdmissionForm } from '../Controllers/addmission_form1_controller.js';



// import multer from 'multer'
// import path from 'path'
// const app=express()
addmission_form1_router.use(cors());

// const storage =multer.diskStorage({
//     destination:'./upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(req.file.originalname)}`)
//     }
// })
// const upload = multer({
//     storage:storage
// })

// cors added


// Define your email sending function
export const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., 'Gmail'
    port: 465,
    secure: true,
    secureConnection: true,
    auth: {
      user: 'agastyatechasyst@gmail.com', // Your email address
      pass: 'pbqx prqv feyt djoa', // Your email password
    },
    tls: {
      rejectUnAuthorized: true
    }
  });
 

const mailOptions = {
  from: 'agastyatechasyst@gmail.com', // Your email address
  to: to, // User's email address
  subject: subject,
  text: text,
};

await transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error sending email: ' + error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
let info = await transporter.sendMail(mailOptions);
console.log(`Message Sent: ${info.messageId}`);
}
  ;

// addmission_form1_router.get('/',getAdmissionForm)
// Define your route handlers
addmission_form1_router.get('/', getAdmissionForm);
addmission_form1_router.post('/', createAdmissionForm);

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




export default addmission_form1_router