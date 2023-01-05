const express = require('express');
const router = express.Router();

// Set a response for a specific route
router.get('/', (req, res) => {
    res.send('API Tasks comes here')
});

// Export the routes
module.exports = router;