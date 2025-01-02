import express from "express";
import cors from "cors";
import taskRoutes from "./routs/routs.js";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
dotenv.config();

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};

const app = express();


app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", taskRoutes);

connectDB();

app.listen(3000, () => {
 console.log("Server is running on port 3000");
});
