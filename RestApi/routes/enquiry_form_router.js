import express from 'express'
import nodemailer from "nodemailer"
const enquiry_form_router=express.Router()
import { createEnquiryForm, getEnquiryForm } from '../Controllers/enquiry_form_controller.js';







// Define your email sending function
export const sendEmail = async (to, subject, text) => {
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
        rejectUnAuthorized: false
      }
    });
   
  
  const mailOptions = {
    from: 'agastyatechasyst@gmail.com', // Your email address
    to: to, // User's email address
    subject: subject,
    text: text,
  };
  
  // await transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.log('Error sending email: ' + error);
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
  // });
  // let info = await transporter.sendMail(mailOptions);
  // console.log(`Message Sent: ${info.messageId}`);
  
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
  };
  

  enquiry_form_router.get('/',getEnquiryForm)
  enquiry_form_router.post('/',createEnquiryForm)
// enquiryFormRouter.get('/:id',enquiryFormController.getSingleDocById)
// enquiryFormRouter.put('/:id',enquiryFormController.updateDocById)
// enquiryFormRouter.delete('/:id',enquiryFormController.deleteDocById)




export default enquiry_form_router