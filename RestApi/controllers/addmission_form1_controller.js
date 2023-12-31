
import { sendEmail } from "../routes/addmission_form1_router.js";
import { admissionServices, getAdmissionFormService } from "../services/admision_service.js";

const getAdmissionForm = async (req, res) => {
   try {

      const data = await getAdmissionFormService()
      console.log(data);
      res.json({ data });
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching user data' });
   }
}

const createAdmissionForm = async (req, res) => {
   let { name, phone, email, course1 } = req.body
   const data = await admissionServices(name, phone, email, course1)
   try {
      // Your user creation logic here
      // Assuming you have successfully created the user

      const userEmail = req.body.email;
      const subject = `  Admission Successful`;
      const message = ` Dear ${req.body.name}  Your Admission submission is successfull ... Thank you for Admission!
      your personal details are
      Mobile Number :${req.body.phone} 
      Email Id :${req.body.email}
      Cource :${req.body.course1}
      `
         ;

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
//   console.log(data);
//   console.log(res);




// const uploadImage = async (req, res) => {
//    console.log(req.file);

// }
export { createAdmissionForm, getAdmissionForm }


