const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to register page using controllers");

    }
    catch (error) {
        console.log(error);
    }
}



const register = (req, res) => {

    try {

        res.status(200).send("Welcome to register page using controllers");
    }
    catch (error) {
        res.status(400)

    }
}
module.exports = { home,register };