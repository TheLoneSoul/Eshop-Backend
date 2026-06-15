import express from "express";
import dbConnection from "./connectDatabase.js";
import dotenv from "dotenv";
dotenv.config();
dbConnection();
const app = express();

app.use("/api", (req, res) => {
  res.send("AP sssI is working");
});

app.listen(3000, () => {
  console.log("Server is running");
});
