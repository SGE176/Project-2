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
    // const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
    // const thai = await Recipe.find({ 'category': 'Thai' }).limit(limitNumber);
    // const american = await Recipe.find({ 'category': 'American' }).limit(limitNumber);
    // const chinese = await Recipe.find({ 'category': 'Chinese' }).limit(limitNumber);

    // const food = { latest, thai, american, chinese };

    res.render('index', { title: 'Fitness Today - Home', categories } );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
}


/**
 * GET /categories
 * Categories 
*/
// exports.exploreCategories = async(req, res) => {
//   try {
//     const limitNumber = 20;
//     const categories = await Category.find({}).limit(limitNumber);
//     res.render('categories', { title: 'Fitness Classes - Categoreis', categories } );
//   } catch (error) {
//     res.status(500).send({message: error.message || "Error Occured" });
//   }
// } 
