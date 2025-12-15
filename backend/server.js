const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth.routes"));

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/farmlink")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Mongo error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("FarmLink backend is running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
