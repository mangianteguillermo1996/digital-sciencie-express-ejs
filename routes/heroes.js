const express = require('express');
const router = express.Router();
const heroes = require('../controllers/heroeController');

router.get('/', heroes.index);
router.get('/detalle/id/:id', heroes.detail);
router.get('/bio/id/:id/:ok?', heroes.bio);

module.exports = router;

