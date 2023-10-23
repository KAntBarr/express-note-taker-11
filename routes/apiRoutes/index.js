const router = require('express').Router();
const blogRoutes = require('./notesRoutes');

router.use('/notes', blogRoutes);

module.exports = router;