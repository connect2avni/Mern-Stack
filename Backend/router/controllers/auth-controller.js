const User = require('../../models/user-model');
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

        res.status(200).json({ msg: "User registered successfully", user: userCreated });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
    }
}

module.exports = { home, register };
