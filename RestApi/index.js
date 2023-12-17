import express from 'express'
import mongoose from "mongoose";
// import studentRouter from './Routes/student_router.js';
import bodyParser from 'body-parser';
import cors from 'cors';
// import addUserRouter from './Routes/user_router.js';
// import addmissionForm1Router from './Routes/addmission_form1_router.js';
// import enquiryFormRouter from './Routes/enquiry_form_router.js';
// import fileUpload from 'express-fileupload';
import dotenv from 'dotenv'
import login_router from './routes/login_router.js';
import addmission_form1_router from './routes/addmission_form1_router.js';
import enquiry_form_router from './routes/enquiry_form_router.js';
import user_router from './routes/user_router.js';
import student_router from './routes/student_router.js';


// import connectDB from './DB/ConnectDb.js';






dotenv.config()

const app = express()
const port = process.env.PORT || "3000"
mongoose.set('strictQuery', true);


//data base connection start
// const mongoURI =process.env.DATABASE_URL
// const DBNAME=process.env.DBNAME
// connectDB(mongoURI,DBNAME);



// Get the MongoDB connection URI from the environment variables
const mongoURI = process.env.MONGODB_URI;

// Connect to the MongoDB database
mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "Cources"
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


// mongoose.connect("mongodb+srv://tehniyatkhatoon17:BlvS5HfCdW9ptE5h@bookstore.2ria5fh.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true});

// mongoose.set('strictQuery', false);
//data base connection end

app.use(bodyParser.urlencoded({ extended: true }))
// app.use(fileUpload())
app.use(cors());
app.use(express.json());
app.use(express.static('public'))

//load routes
// app.use('/',express.static('/upload/images'))
app.use('/student', student_router)
app.use('/user', user_router)
app.use('/admission', addmission_form1_router)
app.use('/enquiry', enquiry_form_router)
app.use('/login',login_router)

// res.json({
//     success: 1,
//     profile_url: `http://localhost:3003/profile/${req.file.filename}`
//  })


app.listen(port, () => {
    console.log(`server started at ${port}`);
})