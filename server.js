const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const recipes = require('./routes/api/recipes');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// // Passport Middleware
// app.use(passport.initialize());

// // Passport Config
// require('./config/passport')(passport);

// Use Routes
app.use('/api/recipes', recipes);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('lolas-recipes/build'));

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'lolas-recipes', 'build', 'index.html')
    );
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
