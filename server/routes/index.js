var express = require('express');
var app = express();
var router = express.Router();
var User = require('../db/schema/userSchema');
var {runCommand, showHelp} = require('../resume-cli/resume');

router.get('/search', (req,res) => {
const {q,category} = req.query;
res.send(`Q:${q} category:${category}`)
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login/auth' ,async(req,res) => {
 const {email,password } = req.body; 
 if(!email || !password){
  res.sendStatus(400);
 }
 try {
  const data = await User.findOne({email,password});
  if(data)
  res.send({message: 'logged in successfully' ,email});
  else 
  res.status(401).json({message:'invalid credential'});
 } catch (error) {
  console.log(error);
 }
});

router.post('/login/signup' , async(req,res) => {
  const {username, email, password} = req.body;
  console.log(req.body);
  try {
    const newUser = new User({ username, password, email });
    await newUser.save();

    console.log(newUser);
    res.status(201).json({ message: 'User created', user: newUser });

  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
})

router.post('/about/cli' ,async(req,res) => {
const {command} = req.body;
const result = runCommand(command);

res.json({
  output: result.output,
  error: result.error,
  help: result.help ? showHelp() : null,
});
});

module.exports = router;
