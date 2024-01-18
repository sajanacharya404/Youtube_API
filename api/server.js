import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./db/db.js";

connectDB();
const app = express();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started at port number :${port}`);
});
