// Common initial line for all routes
const router = require('express').Router();

let Food = require('../models/food_model');

router.route('/').get((req, res) => {
    // The find method returns a promise - a list of all the users
   
        Food.find()
        .then(food => res.json({data:food,success:true}))
        .catch(err => res.status(400).json('Error: ' + err));
 
});

router.route('/add').post((req,res) => {
   
    
    const newFood = new Food({
        name:req.body.name,
        servings:req.body.servings,
        units:req.body.units,
        calories:req.body.calories,
        carbs:req.body.carbs,
        fats:req.body.fats,
        protein:req.body.protein
    });

    newFood.save()
        .then(() => res.json('Food added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req,res) => {
  
        Food.findById(req.params.id)
        .then(food => res.json({data:food,success:true}))
        .catch(err => res.status(400).json('Error ' + err));
  
    

});

router.route('/:id').delete((req, res) => {
    Food.findByIdAndDelete(req.params.id)
        .then(() => res.json('Food deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req,res) => {
    Food.findById(req.params.id)
        .then(food => {
            food.name = req.body.name;
            food.servings = req.body.servings;
            food.units = req.body.units;
            food.calories = Number(req.body.calories);
            food.carbs = Number(req.body.carbs);
            food.fats = Number(req.body.fats);
            food.protein = Number(req.body.protein);
        
            food.save()
                .then(() => res.json('Food updated!'))
                .catch(err => res.status(400).json('Error:' +err));

        })
        .catch(err => res.status(400).json('Error' + err));
});

// common export for all routes
module.exports = router;