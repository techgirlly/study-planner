console.log("SERVER FILE STARTED");

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();

const app = express();
const db = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const timetableRoutes = require("./routes/timetableRoutes");

app.use(cors({
  origin: [
    "http://127.0.0.1:5500",
    "https://study-planner-brown-gamma.vercel.app",
    "https://study-planner-brown-gamma.vercel.app/",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/timetable", timetableRoutes);


app.get("/", (req, res) => {
  res.send("Study Planner API is running...");
});
app.get("/test-db", (req, res) => {

  db.query("SELECT 1", (err, result) => {

    if (err) {
      return res.send(err);
    }

    res.send("Database connected successfully");
  });

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
