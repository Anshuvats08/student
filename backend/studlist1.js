const mongoose=require('mongoose');
const dataschema=new mongoose.Schema({
    id:String,
    name:String,
    age:String,
    dob:String,
    address:String,
    fee:String
})
module.exports=mongoose.model('studs',dataschema);
