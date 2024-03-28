import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import { connectDB } from './db/db.js';

dotenv.config();
const app = express();
connectDB(); 

app.get("/", (req, res) =>{
    res.send("Auth Server is Live");
})

// middleware
app.use(express.json());

// Routes
app.use('/api/v1', userRoutes);

app.listen(process.env.PORT, ()=> {
    console.log(
      `Auth server is running on PORT ${process.env.PORT}`.yellow.bold
    );
})