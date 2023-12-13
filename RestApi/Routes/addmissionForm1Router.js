import express from 'express'
import nodemailer from "nodemailer"

// import multer from 'multer'
// import path from 'path'
import cors from 'cors';
const app=express()
app.use(cors());
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