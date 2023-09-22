const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;
const dbUrl = process.env.MONGODB_URI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./api/routes/tasksRoutes.js');
const expressHealthcheck = require('express-healthcheck');


// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl);

// Configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Register API routes
app.use('/api', router);

// Start the server
app.listen(port, () => {
  console.log(`RESTful API demo server started on: http://localhost:${port}/`);
});

// Health route to check server status
app.use('/health', expressHealthcheck({
  healthy: () => {
    return { message: 'ExpressJS web service is up and running' };
  }
}));

// Handle 404 errors for incorrect URLs
app.use((req, res) => {
    res.status(404).json({
        code: 404,
        message: 'Resource not found',
        description: `The requested URL '${req.originalUrl}' does not exist.`,
      
    });
  });