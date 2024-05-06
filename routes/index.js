var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/create', async (req, res, next)=>{
 const user = req.body;
 console.log(user);
  res.render('index',{data: user});
})

module.exports = router;
