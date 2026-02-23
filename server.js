import express from "express";
import { pool } from "./db.js";
import reviewRoutes from "./routes/review.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use("/api", reviewRoutes);

app.listen(3000, () => {
  console.log("Review server running on port 3000");
});