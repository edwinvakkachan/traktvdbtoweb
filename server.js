import express from "express";
import { pool } from "./db.js";
import reviewRoutes from "./routes/review.js";
import { log } from "./timelog.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use("/api", reviewRoutes);

app.listen(3004, () => {
  const nowIST = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "long"
  }).format(new Date());

  console.log(`🚀 Review server running on port 3004`);
  console.log(`🕒 Started at (IST): ${nowIST}`);
});