const express = require('express');
const router = express.Router();
const main = require('../controllers/mainController');

router.get('/', main.home);
router.get('/creditos', main.creditos);

module.exports = router;
