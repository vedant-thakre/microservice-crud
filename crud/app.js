import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";

dotenv.config();
const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("Crud Server is Live");
});

app.listen(process.env.PORT, () => {
  console.log(`Crud server is running on PORT ${process.env.PORT}`.yellow.bold);
});
