const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    servings: {
        type: String
    },

    units : {
      type: String
    },

    calories:{
        type: Number, required: true
    },

    carbs:{
        type: Number, required: true
    },

    fats:{
        type: Number, required: true
    },

    protein:{
        type: Number, required: true
    }

    // Carbs, protein, fats, calories


  },
  { timestamps: true }
);

// timestamps will auto-create date and time of account activity

const Food = mongoose.model("Food", foodSchema);


// const newD = new Food({
//   name:"Pizza",
//   servings:2,
//   calories:100,
//   carbs:50,
//   fats:40,
//   protein:2
// })

// newD.save();

module.exports = Food;
