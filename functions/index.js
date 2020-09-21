const functions = require("firebase-functions");
const express = require("express");
require("dotenv").config({ path: "./config/config.env" });
const cors = require("cors");
const paymentsRouter = require("./routes/payments");

// App config
const app = express();

// middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("Hello World"));
app.use("/payments", paymentsRouter);

// listen command
exports.api = functions.https.onRequest(app);
