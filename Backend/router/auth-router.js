const express = require("express");
const router = express.Router();
const { home, register } = require("./controllers/auth-controller")
const authControllers= require("./controllers/auth-controller");


router.route("/").get(authControllers.home);
router.route("/register").get(authControllers.register);

module.exports = router;

// router.route("/register").get((req, res) => {
//   res.status(200).send("Welcome to register page");
// });
// router.get('/', (req, res) =>{
//     res.status(200).send("Welcome to router");
//   });


// router.post('/', (req, res) =>{
//   res.status(200).send("Welcome to router");
// });

// router.route('/').get ((req, res) =>{
//   res.status(200).send("Welcome to router");
// });

