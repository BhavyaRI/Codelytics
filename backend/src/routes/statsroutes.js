const express = require('express');
const router = express.Router();
const codeforcescontroller = require('../controllers/codeforcescontroller');

router.get('/:userId',codeforcescontroller.getUserinfo);
router.get('/contests/upcoming',codeforcescontroller.upcomingcontest);

module.exports = router;