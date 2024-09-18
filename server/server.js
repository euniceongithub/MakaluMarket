// server/server.js
const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routes
const itemRoutes = require('./routes/items'); // Add this line

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/items', itemRoutes); // Add the item routes

// Sample route
app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
