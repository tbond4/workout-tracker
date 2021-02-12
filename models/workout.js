const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:Date,
    excercises:[{
        type:String,
        name:String,
        duration:Number,
        weight:Number,
        reps:Number,
        sets:Number,
        distance:Number
    }]
});

const Workout = mongoose.model("workout",workoutSchema);

module.exports=Workout;