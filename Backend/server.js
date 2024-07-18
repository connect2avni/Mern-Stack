const express = require('express');
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
require("dotenv").config();

app.use(express.json());
app.use("/api/auth", router);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error("Failed to connect to the database. Server not started.", error);
});
