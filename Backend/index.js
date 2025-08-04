// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import schemeRoutes from "./route/scheme.route.js"; // Path is correct
// import userRoutes from "./route/user.route.js";     // Path to your user routes

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 4008;
// const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/farmerDB";

// // Middleware
// app.use(express.json());
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "http://localhost:3000",
//       "http://127.0.0.1:3000"
//     ],
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type", "Authorization"]
//   })
// );

// // Database Connection
// mongoose
//   .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // Routes
// app.use("/api/schemes", schemeRoutes);
// app.use("/user", userRoutes);

// // Default Route
// app.get("/", (req, res) => {
//   res.send("Welcome to the Farmer Assistance API!");
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running on http://localhost:${PORT}`);
// });


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import schemeRoutes from "./route/scheme.route.js";
import userRoutes from "./route/user.route.js";
// import mlRoutes from "./route/ml.route.js";  // Ensure correct path

import mlRoutes from "./route/ml.route.js"; // Ensure correct path


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4008;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/farmerDB";

// Middleware
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3000", "http://127.0.0.1:3000"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// Database Connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/schemes", schemeRoutes);
app.use("/user", userRoutes);
app.use("/ml", mlRoutes);

// Default Route
app.get("/", (req, res) => {
    res.send("Welcome to the Farmer Assistance API!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
