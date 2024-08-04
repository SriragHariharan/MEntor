const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

//cors
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

//routes
const paymentRoutes = require("./routes/paymentRoutes")
app.use("/api/v1/", paymentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    if(err.status){
        return res.status(err.status).json({message: err.message});
    }
	return res.status(500).json({ message: err ?? "Internal Server Error" });
});

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error("db error ::: ", error));
db.once("open", () => {
	console.log("database connected...");
	app.listen(process.env.PORT, () => {
		console.log("listening on port " + process.env.PORT);
	});
});