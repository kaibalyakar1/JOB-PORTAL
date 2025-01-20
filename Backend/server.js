import "./src/config/instrument.js";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import * as Sentry from "@sentry/node";
import { clerWebHook } from "./src/controllers/webhooks.js";

//intialize
const app = express();
await connectDB();
//middleware
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post("/webhook", clerWebHook);
//port
const PORT = process.env.PORT || 5000;

Sentry.setupExpressErrorHandler(app);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
