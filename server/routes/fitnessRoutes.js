const express = require('express');
const router = express.Router();
const fitnessController = require('../controllers/storyController');

/**
 * App Routes 
*/
router.get('/', fitnessController.homepage);
router.get('/categories', fitnessController.exploreCategories);



module.exports = router;