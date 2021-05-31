// Common initial line for all routes
const router = require('express').Router();

let Exercise = require('../models/exercise');




router.route('/').get((req, res) => {
    
        Exercise.find()
        .then(ex => res.json({data:ex,success:true}))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {


    const workoutName = req.body.workoutName;
    const videoUrl = req.body.videoUrl;
    const  workoutType = req.body.workoutType;
    const bodyPart = req.body.bodyPart;
    const bodyPart2 = req.body.bodyPart2;
    const bodyPart3 = req.body.bodyPart3;
    const bodyPart4 = req.body.bodyPart4;
    const equipment = req.body.equipment;
    const thumbnail_url = req.body.thumbnail_url;

    
    
    const newEx = new Exercise({
        workoutName,
        videoUrl,
        workoutType,
        bodyPart,
        bodyPart2,
        bodyPart3,
        bodyPart4,
        equipment,
        thumbnail_url
    });

    newEx.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req,res) => {
    
        Exercise.findById(req.params.id)
        .then(ex => res.json({data:ex,success:true}))
        .catch(err => res.status(400).json('Error ' + err));
    
    

});

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req,res) => {
    Exercise.findById(req.params.id)
        .then(ex => {
            ex.workoutName = req.body.workoutName;
            ex.videoUrl=req.body.videoUrl;
            ex.workoutType=req.body.workoutType;
            ex.bodyPart=req.body.bodyPart;
            ex.bodyPart2=req.body.bodyPart2;
            ex.bodyPart3=req.body.bodyPart3;
            ex.bodyPart4=req.body.bodyPart4;
            ex.equipment=req.body.equipment;
            ex.thumbnail_url=req.body.thumbnail_url;
           
        
            ex.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error:' +err));

        })
        .catch(err => res.status(400).json('Error' + err));
});

// common export for all routes
module.exports = router;