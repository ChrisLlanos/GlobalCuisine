const { Schema, model } = require('mongoose');

const foodItemSchema = new Schema(
    {
        name: {
            type:String,
            required:true,
            unique:true,
            trim: true,
        },
        price: {
            type: Number,
        },
        description: {
            type: String,
            trim: true,
        }
    }
);

const FoodItem = model('FoodItem', foodItemSchema);
module.exports = FoodItem;