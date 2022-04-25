const express = require('express');
const router = express.Router();
const storyController = require('../controllers/storyController');

/**
 * App Routes 
*/
router.get('/', storyController.homepage);
router.get('/categories', storyController.exploreCategories);
router.get('/submitstory', storyController.submitStory);
// router.post('/submit-story', storyController.submitStoryOnPost);


module.exports = router;