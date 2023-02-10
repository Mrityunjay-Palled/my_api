const router = require("express").Router();
const Menu=require('../modules/Menu')

router.post("/menu",async (req, res) => {
  const newItem=new Menu({
    image:req.body.image,
    title:req.body.title,
    description:req.body.description,
  }) 
  try{
    const menuItem=await newItem.save()
    res.status(200).json(menuItem)
  }catch(err){
    res.status(500).json(err)
  }
});

module.exports = router;
