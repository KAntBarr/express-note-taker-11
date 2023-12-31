const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const path = require('path');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    console.log("Request for index received.");
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
    console.log("Request for notes received.");
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;