const express =require("express");
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config()
const {routes} = require('./routes/registerRoute')
const mongoose = require('mongoose')
// const multer = require("multer")
const app = express();
const PORT = 8080;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/" , routes)
app.use("uploads" , express.static('uploads'))
// const upload = multer({dest : './uploads'})
const uri = process.env.MONGO_URI ;
app.get("/" , (req,res) => {
    res.status(200).json("welcome");
})
mongoose.connect(uri,{ 
  dbName: process.env.DBNAME || 'FormData', 
}).then(()=>{
  console.log("mongodb connected sucessfully")
})
.catch((err)=>{
  console.log("DB connection failed : " , err)
})

// app.post("/form" ,upload.any()  ,(req,res)=>{
// console.log(req.body)
//   console.log(req.files)
// })

app.listen(PORT , (err)=>{
    if(err) console.error(err);
    else
    console.log(`Server is running at port ${PORT}`) 
})