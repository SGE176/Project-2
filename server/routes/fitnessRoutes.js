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


// Login Page
router.get('/login',  (req, res) => res.render('login'));

// Registeration Page
router.get('/registeration',  (req, res) => res.render('/views/registeration'));

//Membership
router.get('/explore-membership', storyController.exploreMembership);

//Galleries
router.get('/check-galleries', storyController.checkGalleries);

//Features
router.get('/features', storyController.features);



//Registration

// router.get('/registration', storyController.registration);


module.exports = router;