const express = require('express');
const router = express.Router();
const codeforcescontroller = require('../controllers/codeforcescontroller');

router.get('/:userId',codeforcescontroller.getUserinfo);

module.exports = router;