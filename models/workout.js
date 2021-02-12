const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type:Date,
        default:Date.now
    },
    excercises:[{
        type:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        duration:Number,
        weight:Number,
        reps:Number,
        sets:Number,
        distance:Number
    }]
},{
    toJSON:{virtuals:true}
});
workoutSchema.virtual("totalDuration").get(function(){
    return this.excercises.reduce((accumulator,excercise)=>{
        return accumulator + excercise.duration
    },0);
})
const Workout = mongoose.model("workout",workoutSchema);

module.exports=Workout;