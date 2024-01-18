import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./db/db.js";

connectDB();
const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded());

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started at port number :${port}`);
});
