// We get Node modules we need and save it on a variable
// Create a express app 
const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings
app.set('port', process.env.PORT || 8080);

// Middleware (process urls)
app.use(morgan('dev'));     // Get info from browser request
app.use(express.json());    // Allows server to understand json data

// Routes
app.use('/tasks', require('.\\routes\\tasks'))

// Static files (html, css, images, ...)
app.use(express.static(__dirname + '\\public'));

// Server listening port 8080
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})