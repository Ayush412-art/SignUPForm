const user = require("../models/user.model")


const register = async(req,res)=>{
        const { name , email} = req.body; 
        const {image} = req.file;
        try{
        const isUser = await user.findOne({email : email}) 
        if(isUser){
           return  res.status(400).json({msg : "User already exists"})
        }
        const imageUrl = image ? `/uploads/${image.filename}` : null;
        const newuser = new user({username : name , email : email , image : imageUrl })
        await newuser.save();
        return res.status(201).json({msg : "Form submitted sucessfully"})
    }
    catch(error){
        return error;
    }
}

module.exports = {register};