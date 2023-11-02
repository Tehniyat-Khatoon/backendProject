// // import { sendEmail } from "../Routes/userRouter.js";
// import { sendEmail } from "../Routes/userRouter.js";
// import { userServices, userDataServices } from "../Services/userServices.js";


// const userController = async (req, res) => {
//    let { fname, lname, emailId, mobile } = req.body

//    const data = await userDataServices(fname, lname, emailId, mobile)
//    // console.log(data);
//    try {
//       // Your user creation logic here
  
//       // Assuming you have successfully created the user
//       const userEmail = req.body.emailId; // Get the user's email from the request
//       const subject = 'Registration Successful';
//       const message = 'Thank you for registering!';
  
//       // Send a success email to the user
//       await sendEmail(userEmail, subject, message);
  
//       // Log the user data
//       console.log(data);
  
//       // Return a success response to the client
//       res.status(200).json({ message: 'User added successfully' });
//     } catch (error) {
//       console.error('Error adding user: ' + error);
//       res.status(400).json({ error: 'An error occurred while adding the user' });
//      return res
//     }
//    // console.log(res);
//    console.log(data);
//    res.json({ data })

   
// }








// // const getUserPassword = async (req, res) => {
// //    let { name, mobile, emailId } = req.body

// //    const data = await getuserServices(name, mobile, emailId, password);

// //  const myPlaintextPassword =  data;
// //  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
// // console.log(data);




// // }



// const userData = async (req, res) => {
//    try {
//       // const result = await userDataServices.find()
//       // res.send(result)
//       // let { name, mobile, emailId, password } = req.body
//       const data = await userServices()
//       console.log(data);
//       // console.log(res);
//       res.json({ data })
//       return data
//    } catch (error) {
//       console.log(error);
//    }
// }





// export { userController, userData }


import { sendEmail } from "../Routes/userRouter.js";
import { userServices, userDataServices } from "../Services/userServices.js";

const userController = async (req, res) => {
   let { fname, lname, emailId, mobile } = req.body;
   const data = await userDataServices(fname, lname, emailId, mobile)
   try {
      // Your user creation logic here
      // Assuming you have successfully created the user

      const userEmail = req.body.emailId;
      const subject = 'Registration Successful';
      const message = 'Thank you for registering!';

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