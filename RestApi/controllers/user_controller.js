
import { sendEmail } from "../routes/user_router.js";
import { userServices, userDataServices } from "../services/user_services.js";

const userController = async (req, res) => {
   let { fname, lname,mobile, emailId } = req.body;
   const data = await userDataServices(fname, lname, mobile, emailId)
   try {
      // Your user creation logic here
      // Assuming you have successfully created the user

      const userEmail = req.body.emailId;
      const subject = `  Registration Successful`;
      const message = ` Dear ${req.body.fname} ${req.body.lname} Your registration successfull ... Thank you for registering!
        Your personal details are 
        Mobile Number:${req.body.mobile}
        Email Id:     ${req.body.emailId}
      `;
      console.log(userEmail);
      console.log(fname);
      // console.log(message);

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

const userData = async (req, res) => {
   try {
      const data = await userServices();
      console.log(data);
      res.json({ data });
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching user data' });
   }
}

export { userController, userData };