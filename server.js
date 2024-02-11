const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const { generateToken } = require('./auth');
const { authenticate } = require('./middleware');
const User = require('./user');

app.use(express.json());

const mongoURI = 'mongodb+srv://SRI:6i6r8nitd3@user.eztjc1u.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.use(express.static(path.join(__dirname, 'IARE')));


app.use(express.static(path.join(__dirname, 'playplex')));


app.post('/signup', async (req, res) => {
  
});


app.post('/login', async (req, res) => {
  
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
