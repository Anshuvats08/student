const mongoose=require('mongoose');
const studentschema=new mongoose.Schema({
    name:String,
    password:String,
    email:String
})
module.exports=mongoose.model('admins',studentschema);

// name of collection from mongodb 