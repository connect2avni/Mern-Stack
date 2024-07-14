const express = require('express')
const app = express()
const router= require("./router/auth-router");

app.use(express.json());

app.use("/api/auth",router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// app.get('/', function (req, res) {
//   res.status(200).send("Welcome")
// });

// app.get("/register",(req,res)=>{
//   res.status(200).send("Welcome to register");
// });


//app.listen(3000)

//app.set("view engine","ejs");
// //middleware
// app.use(function(res,req,next){
//     console.log("middleware working");
//     next();
// })