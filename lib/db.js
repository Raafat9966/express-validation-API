// const mongoose = require("mongoose");
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
	.connect(process.env.MONGODB_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log("mongoDB connected"))
	.catch((err) => {
		console.log(err);
		process.exit(1);
	});
