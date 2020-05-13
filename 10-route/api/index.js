const express = require('express');
const router = express.Router();

const users = require('./users');
const tweets = require('./tweets');

const looger = require('./middlewares/logger');

router.use(looger);
router.use('/users', users);
router.use('/tweets', tweets);

module.exports = router;
