
import { sendEmail } from "../routes/enquiry_form_router.js";
import { createEnquiryServices, getEnquiryServices } from "../services/enquiry_service.js";

const createEnquiryForm = async (req, res) => {
   let { name, contactNumber, emailId, cource, residentialAddress } = req.body
   const data = await createEnquiryServices(name, contactNumber, emailId, cource, residentialAddress)
   //  console.log(data);
   //  console.log(res);

   //  res.json({data})
   try {
      // Your user creation logic here
      // Assuming you have successfully created the user

      const userEmail = req.body.emailId;
      const subject = `Welcome to Step Academy`;
      const message = 
   ` Dear ${req.body.name}  How we can help you ? ... Thank you for Enquiry!
     Your Enquiry details are 
     Mobile Number:${req.body.contactNumber}
     Email Id:     ${req.body.emailId}
     cource: ${req.body.cource}
     Residential Address :${req.body.residentialAddress}
     Reference : ${req.body.refrenceIfAny}
   `;

      // Send a success email to the user
      await sendEmail(userEmail, subject, message);

      // Log the user data
      console.log(data);

      // Return a success response to the client
      res.status(200).json({ message: 'User added successfully' });
   } catch (error) {
      console.error('Error adding user: ' + error);
      res.status(500).json({ error: 'An error occurred while adding the user' });
   }


}

const getEnquiryForm = async (req, res) => {
   const data = await getEnquiryServices()
   res.json({ data })
}

// const createEnquiryForm= async(req,res)=>{
//     let {name,email,message} =req.body
//  const data= await createDataService(name,email,message)
//  console.log(data);
//  console.log(res);
//  res.json({data})

// } 



export { createEnquiryForm, getEnquiryForm }


