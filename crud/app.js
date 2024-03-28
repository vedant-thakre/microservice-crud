import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoute.js"
import { connectDB } from "./db/db.js";

dotenv.config();
const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("Crud Server is Live");
});

// middleware
app.use(express.json());

// Routes
app.use('/api/v1', taskRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Crud server is running on PORT ${process.env.PORT}`.yellow.bold);
});
