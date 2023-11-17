import express from 'express'
import mongoose from "mongoose";
import studentRouter from './Routes/studentRouter.js';
import bodyParser from 'body-parser';
// var cors = require('cors')
import addUserRouter from './Routes/userRouter.js';
import addmissionForm1Router from './Routes/addmissionForm1Router.js';
import enquiryFormRouter from './Routes/enquiryFormRouter.js';
// import fileUpload from 'express-fileupload';
import dotenv from 'dotenv'
import LoginRouter from './Routes/loginRouter.js';
// import connectDB from './DB/ConnectDb.js';
dotenv.config()

const app = express()
const port = process.env.PORT || '3000'
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
app.use(express.json());
app.use(express.static('public'))
// app.use(cors());
//load routes
// app.use('/',express.static('/upload/images'))
app.use('/student', studentRouter)
app.use('/user', addUserRouter)
app.use('/admission', addmissionForm1Router)
app.use('/enquiry', enquiryFormRouter)
app.use('/Login',LoginRouter)

// res.json({
//     success: 1,
//     profile_url: `http://localhost:3003/profile/${req.file.filename}`
//  })


app.listen(port, () => {
    console.log(`server started at ${port}`);
})