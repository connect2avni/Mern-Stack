const express = require('express')
const app = express()
const router= require("./router/auth-router");

app.use("/api/auth",router);



// app.get('/', function (req, res) {
//   res.status(200).send("Welcome")
// });

// app.get("/register",(req,res)=>{
//   res.status(200).send("Welcome to register");
// });

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



//app.listen(3000)

//app.set("view engine","ejs");
// //middleware
// app.use(function(res,req,next){
//     console.log("middleware working");
//     next();
// })