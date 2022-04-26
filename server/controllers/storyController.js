require('../models/database');
const Category = require('../models/Category');
const Story = require('../models/Story');


/**
 * GET /
 * Homepage 
*/
exports.homepage = async(req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
  
    res.render('index', { title: 'Fitness Today - Home', categories } );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
}


/**
 * GET /categories
 * Categories 
*/
exports.exploreCategories = async(req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render('categories', { title: 'Fitness Classes - Categoreis', categories } );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
} 

/**
 * GET /submit-story
 * Submit Story
*/
exports.submitStory = async(req, res) => {
 try {
    res.render('submit-story', { title: 'Fitness Today - Submit Story'} );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
}

/**
 * GET /explore-latest
 * Explplore Latest 
*/
exports.exploreMembership = async(req, res) => {
  try {
    res.render('explore-membership', { title: 'Fitness Today - Explore Membership'} );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 

/**
 * GET /check-galleries
 * Check Galleries
*/
exports.checkGalleries = async(req, res) => {
  try {
    res.render('check-galleries', { title: 'Fitness Today - Check Galleries'} );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 

/**
 * GET /features
 * Features
*/
exports.features = async(req, res) => {
  try {
    res.render('features', { title: 'Fitness Today - Features'} );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 

/**
 * GET /registration
 * Registration
*/
exports.registration = async(req, res) => {
  try {
    res.render('registration', { title: 'Fitness Today - Register'} );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 

/**
 * GET /Login
 * Login
*/
exports.login = async(req, res) => {
  try {
    res.render('login', { title: 'Fitness Today - Login'} );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 
