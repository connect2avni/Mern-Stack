const User = require('../models/user-model');
const bcrypt = require('bcrypt');

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to the register page using controllers");
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
}

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        const userCreated = await User.create({ username, email, phone, password });

        // const token = await

        res.status(200).json({ msg: "User registered successfully", user: userCreated, token: await userCreated.generateToken() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "User does not exist" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
        res.status(200).json({
            msg: "User logged in successfully",
            token: await user.generateToken()
        });
    } catch (error) {
        // console.error(error);

        next(error);
    }
}

const user= await userExist.comparePassword(password);

module.exports = { home, register, login };
