
import { admissionServices, getAdmissionFormService } from "../Services/admisionService.js";



const createAdmissionForm = async (req, res) => {
   let { name, phone, email, course1 } = req.body
   const data = await admissionServices(name, phone, email, course1 )
   //   console.log(data);
   //   console.log(res);
   res.json({ data })


}

const getAdmissionForm = async (req, res) => {
   const data = await getAdmissionFormService()
   res.json({ data })
   console.log(data);


}

// const uploadImage = async (req, res) => {
//    console.log(req.file);

// }
export { createAdmissionForm, getAdmissionForm }


