import express from "express";
import router from "./routes/router.js";
import "dotenv/config.js";

import "./lib/db.js";
import errorHandler from "./middleware/errorHandler.js";

// require("dotenv").config();
//require("./lib/db");

const app = express();
let port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", router);

app.use(errorHandler);

app.listen(port, () => console.log(`http://localhost:${port}`));
