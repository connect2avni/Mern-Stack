const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

// Pre-save hook to hash password
userSchema.pre("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) {
        return next();
    }

    try {
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRound);
        user.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

//compare password
userSchema.methods.comparePassword = async function (password) {

    return await bcrypt.compare(password,this.password);
}


userSchema.methods.generateToken = async function () {
    
    try {
        const token = jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "365d",
            }
        );
        console.log(token);
        return token;
    }
    catch (error) {
        console.error(error);
    }
}

const User = mongoose.model("User", userSchema);
module.exports = User;
