const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./server/routes/userRoutes");
// const microServiceRoutes = require("./server/routes/microServiceRoutes");
// const logsRoutes = require("./server/routes/logsRoutes");
// const incidenttypeRoutes = require("./server/routes/incidenttypeRoutes");

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/users", userRoutes);
// app.use("/microService", microServiceRoutes);
// app.use("/logs", logsRoutes);
// app.use("/incidenttype", incidenttypeRoutes);

// Database connection
// const dbUrl = "mongodb+srv://kennymusasizi:u5FXlwVWTv9TMy9U@cluster0.mdqhtb6.mongodb.net/?retryWrites=true&w=majority";
// .connect("mongodb+srv://admin:Truth@cluster0.69xowuj.mongodb.net/", {
mongoose
  .connect("mongodb+srv://admin:Truth@cluster0.69xowuj.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
    // Start the serve after successful database connection
    const port = 3011;
    // const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
