const express = require("express");
const router = express.Router();
const { home, register } = require("../controllers/auth-controller")
const authControllers= require("../controllers/auth-controller");

const {signupSchema}= require("../validators/auth-validators");
const validate= require("../middlewares/validate-middleware");



router.route("/").get(authControllers.home);

router.route("/register").post(validate(signupSchema),authControllers.register);
router.route("/login").post(authControllers.login);

module.exports = router;



