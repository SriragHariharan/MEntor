const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
// require("./nodemailer");
require('./kafkaConfig')

//cors
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));


app.listen(process.env.PORT, () => console.log("server listening on port " + process.env.PORT))