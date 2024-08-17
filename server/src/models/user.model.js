const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        username : {
            type:String,
            require:true
        },
        email:{
            type:String,
            require : true,
            unique : true
        },
        image : {
            type : String,
            require : true
        },
        completion : {
            type : Boolean,
            default : false
        }
 
},{timestamps : true})
 
const user = mongoose.model("user"  , userSchema)

module.exports = user;