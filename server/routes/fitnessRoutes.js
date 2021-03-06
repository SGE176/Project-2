const express = require('express');
const router = express.Router();
const storyController = require('../controllers/storyController');
const bcrypt = require('bcryptjs');
const passport = require('passport');


/**
 * App Routes 
*/
router.get('/', storyController.homepage);
router.get('/categories', storyController.exploreCategories);
router.get('/submit-story', storyController.submitStory);
// router.post('/submit-story', storyController.submitStoryOnPost);


// // Login Page
// router.get('/login',  (req, res) => res.render('login'));



//Membership
router.get('/explore-membership', storyController.exploreMembership);

//Galleries
router.get('/check-galleries', storyController.checkGalleries);

//Features
router.get('/features', storyController.features);


//Registration

router.get('/registration', storyController.registration);

//Login
router.get('/login', storyController.login);

module.exports = router;