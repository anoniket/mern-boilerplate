const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    workoutName: {
      type: String,
      required: true,
      
    },

    videoUrl:{
      type:String
    },
     
    workoutType:String,
    bodyPart:String,
    bodyPart2:String,
    bodyPart3:String,
    bodyPart4:String,
    equipment:String,
    thumbnail_url:String


    // description: {
    //     type: String
    // }

  },
  { timestamps: true }
);

// timestamps will auto-create date and time of account activity

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
