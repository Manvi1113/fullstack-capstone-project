const express = require('express');
const app = express();

// Import other necessary middleware and routes
// Example: const bodyParser = require('body-parser');

// Task 1: Import giftRoutes and store in a constant called giftRoutes
const giftRoutes = require('./routes/giftRoutes');

// Middleware setup (e.g., body-parser)
// app.use(bodyParser.json()); // Uncomment if body-parser is needed

// Task 2: Add the giftRoutes to the server by using the app.use() method
app.use('/api/gifts', giftRoutes);

// Other routes and middleware
// Example: app.use('/api/anotherRoute', anotherRoute);

// Default route or error handling (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the Gift API');
});

// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
