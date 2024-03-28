import express from "express";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Main Server is Live");
});

app.listen(process.env.PORT, () => {
  console.log(`Main server is running on PORT ${process.env.PORT}`.yellow.bold);
});
