import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import studentRoutes from './routes/studentRoutes';
import applicationRoutes from './routes/applicationRoutes';

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Load routes
app.use(studentRoutes);
app.use(applicationRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
