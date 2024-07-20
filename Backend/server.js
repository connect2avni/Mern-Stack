const express = require('express');
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute= require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');
require("dotenv").config();

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);


app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error("Failed to connect to the database. Server not started.", error);
});
