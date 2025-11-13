const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const qtaskRoutes = require('./routes/qtaskRoutes');
const focusRoutes = require('./routes/focusrou');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors()); 
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/focus', focusRoutes);    
app.use('/api/qtasks', qtaskRoutes);
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running successfully on port ${PORT}`);
});