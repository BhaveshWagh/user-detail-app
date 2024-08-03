const express = require("express");
const app = express();
const port = 3000;

// Import user data from userData.js
const user = require('./userData');

// Middleware to serve static files
app.use(express.static("public"));

// CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// GET endpoint to fetch user data
app.get("/api/user", (req, res) => {
  res.json(user);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

