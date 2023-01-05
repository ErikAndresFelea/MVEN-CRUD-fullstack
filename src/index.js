// We get Node modules we need and save it on a variable
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Database URL (provided by MongoDB webpage)
const uri = 'mongodb+srv://Argnos:Password2@cluster0.czjf5bw.mongodb.net/?retryWrites=true&w=majority';

// Create a express app and conects to database
const app = express();
mongoose.connect(uri)
    .then( db => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

// Settings
app.set('port', process.env.PORT || 8080);

// Middleware (process urls)
app.use(morgan('dev'));     // Get info from browser request
app.use(express.json());    // Allows server to understand json data

// Routes
app.use('/tasks', require('.\\routes\\tasks'));


// Static files (html, css, images, ...)
app.use(express.static(__dirname + '\\public'));

// Server listening port 8080
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})