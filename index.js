const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;

const express = require("express");
const app = express();

const corsMiddleware = require("./middleware/cors.middleware");
app.use(corsMiddleware);

app.use(express.json());
const path = require("path");

const { connectDB } = require("./config/db.config");
connectDB();

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/v1/hero", require("./route/hero.route"));
app.use("/api/v1/about", require("./route/aboutRoute"));
app.use("/api/v1/project", require("./route/projectRoute"));
app.use("/api/v1/education", require("./route/education.route"));
app.use("/api/v1/experience", require("./route/experience.route"));
app.use("/api/v1/skill", require("./route/skillsRoute"));
app.use("/api/v1/contact", require("./route/contactRoute"));

const errorHandler = require("./middleware/errorHandler.middleware");
const apiError = require("./utili/apiError.utilte");

app.use((req, res, next) => {
  next(new apiError(`can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandler);

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

console.log("DB_URI exists:", !!process.env.DB_URI);
module.exports = app;
