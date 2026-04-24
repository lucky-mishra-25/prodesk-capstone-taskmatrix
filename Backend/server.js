require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/payment", paymentRoutes); // Razorpay

app.get("/", (req, res) => {
  res.send("TaskMatrix API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});