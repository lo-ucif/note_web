import express from "express";
import { connectdatabase } from "./config/db";
import noterouter from "./router/noterouter";
import dotenv from "dotenv";
dotenv.config();
connectdatabase();

const app = express();
app.use(express.json());
app.use("/note", noterouter);
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
