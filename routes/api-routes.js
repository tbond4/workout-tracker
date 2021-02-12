const { workout } = require("../models");

const router =require("express").Router();
const {Workout}=require("../models");

router.get("/api/workouts",(req,res)=>{
    Workout.find().then(results=>{
        res.json(results)
    }).catch(err=>{
        res.status(500).json(err);
    })
});
router.post("/api/workouts",(req,res)=>{
    Workout.create(req.body).then(results=>{
        res.json(results)
    }).catch(err=>{
        res.status(500).json(err);
    })
});
router.put("/api/workouts/:id",(req,res)=>{

    Workout.findByIdAndUpdate(req.params.id, {$push:{exercises:req.body}},{new:true}).then(results=>{
        res.json(results)
    }).catch(err=>{
        res.status(500).json(err);
    })
});
router.get("/api/workouts/range",(req,res)=>{

});


module.exports =router;