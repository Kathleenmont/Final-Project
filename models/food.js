const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    // _id: {type: Schema.Types.ObjectId, required:true},
    continent: { type: String, required: true },
    country: { type: String, required: true },
    dishName: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    tried: {type: Boolean, required: true}
    
});

const Food = mongoose.model("Food", foodSchema);


module.exports = Food;