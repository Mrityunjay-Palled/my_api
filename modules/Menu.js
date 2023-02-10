const mongoose=require('mongoose')
const Schema=mongoose.Schema

let menu=new Schema({
    image:String,
    title:String,
    description:String,
})

const menu_model = mongoose.model("menu", menu);

module.exports=menu_model