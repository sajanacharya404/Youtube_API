import express from "express";
//dotenv config
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./db/db.js";

//database connection
connectDB();

//express app
const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//routes import
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter);

//server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started at port number :${port}`);
});
