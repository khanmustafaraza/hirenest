const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const authRoute = require("./routes/authroute/authRoute");
const adminAuthRoute = require("./routes/adminroute/adminAuthRoute");
const jobCategoryRoute = require("./routes/jobcategoryroute/jobCategoryRoute");
const jobRoute = require("./routes/jobroute/jobRoute");
dotenv.config();
// ! MIDDLEWARES
app.use(express.json());
app.use(cors("*"));

// * DATABASE CONNECTION
// connectDB();

// ! ROUTES
// app.use("/api/auth", authRoutes);
app.use("/api/auth", authRoute);
app.use("/api/admin/job-category", jobCategoryRoute);
app.use("/api/admin/job", jobRoute);
// ! ADMIN AUTH ROUTE
app.use("/api/admin", adminAuthRoute);

// todo HOME PAGE
app.get("/", (req, res) => {
  res.send(
    "<h1>This is the test Page For Checking that server is running</h1>",
  );
});

// todo CONFIGURE SERVER
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on  http://localhost:${PORT}`);
  });
});
