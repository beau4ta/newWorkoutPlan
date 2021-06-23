const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
           $addFields: {
               totalDuration: {
                   $sum: '$exercises.duration',
               }
           } 
        }
    ])
    .then(result => {
        console.log(result);
        res.json(result)
    }).catch(err => {
        console.log(err)
        res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(result => res.json(result))
    .catch(err => {
        res.json(err)
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find()
    .then(result => res.json(result))
    .catch(err => {
        res.json(err)
    });
});

router.post("/api/workouts/range", (req, res) => {    
    Workout.create({})
    .then(result => res.json(result))
    .catch(err => { 
        res.json(err)
    });
});

router.put("/api/workouts/:id",({body, params}, res)=>{   
    Workout.findByIdAndUpdate(  
     params.id,
     {$push:{exercises:body} },
     {new: true,runValidators:true }
    )
    .then(result => res.json(result))
    .catch(err => { 
        res.json(err)
    })
});

module.exports = router;