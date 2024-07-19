const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

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
userSchema.pre("save", async function(next) {
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

const User = mongoose.model("User", userSchema);
module.exports = User;
