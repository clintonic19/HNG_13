// Import required packages
require('dotenv').config()
const express = require("express");
const routes = require('./routes/routes')

const app = express(); // Initialize Express app
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());


app.use('/me', routes)

// ================================
// Start the server
// ================================
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
