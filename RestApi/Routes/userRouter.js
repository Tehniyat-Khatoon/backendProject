import Express from "express";
import nodemailer from "nodemailer"
const addUserRouter = Express.Router()
import { userController, userData } from "../Controllers/userController.js";
import cors from 'cors';

const app = Express();
app.use(cors()); 
// cors added


// Define your email sending function
// export const sendEmail = async (to, subject, text) => {
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail', // e.g., 'Gmail'
//     port: 465,
//     secure: false,
//     secureConnection: false,
//     auth: {
//       user: 'agastyatechasyst@gmail.com', // Your email address
//       pass: 'pbqx prqv feyt djoa', // Your email password
//     },
//     tls: {
//       rejectUnAuthorized: false
//     }
//   });
 

// const mailOptions = {
//   from: 'agastyatechasyst@gmail.com', // Your email address
//   to: to, // User's email address
//   subject: subject,
//   text: text,
// };

// await transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.log('Error sending email: ' + error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
// let info = await transporter.sendMail(mailOptions);
// console.log(`Message Sent: ${info.messageId}`);

// try {
//   let info = await transporter.sendMail(mailOptions);
//   console.log(`Email sent: ${info.response}`);
// } catch (error) {
//   console.error('Error sending email:', error);
// }
// };

export const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., 'Gmail'
      port: 465,
      secure: false,
      secureConnection: false,
      auth: {
        user: 'agastyatechasyst@gmail.com', // Your email address
        pass: 'pbqx prqv feyt djoa', // Your email password
      },
      tls: {
        rejectUnAuthorized: false,
      },
    });

    const mailOptions = {
      from: 'agastyatechasyst@gmail.com', // Your email address
      to: to, // User's email address
      subject: subject,
      text: text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};


addUserRouter.post('/addUser', userController)
// addUserRouter.post('/getUserPassword',getUserPassword)
addUserRouter.get('/', userData)

// addUserRouter.post('/replace',replacePassword)

export default addUserRouter