var express = require('express');
var router = express.Router();

const userModel = require("../models/userSchema")

/* GET home page. */
router.get('/', async function(req, res, next) {
  const allUser = await userModel.find();
  res.render('index',{allUser});
});

router.post("/create", async (req,res,next)=>{
  const newUser = await userModel.create({
    username: req.body.username,
    password: req.body.password
  })
  console.log(newUser);
  res.redirect("/")
})

module.exports = router;
