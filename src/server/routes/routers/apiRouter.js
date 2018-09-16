const router = require('express').Router();
// Generated routers here
const userRoutes = require('./apiRoutes/userRoutes.js');
router.use(userRoutes);

module.exports = router;
