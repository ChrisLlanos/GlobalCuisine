const { Schema, model } = require('mongoose');

const MenuSchema = new Schema(
    {
        name: {
            type:String,
            required:true,
            unique:true,
            trim: true,
        },
        summary: {
            type: String,
            required: true,
            trim: true,
        },
        foodItems: [{
            type: Schema.Types.ObjectId,
            ref: "FoodItem",
        }] 

    }
);

const Menu = model('Menu', MenuSchema);

module.exports = Menu;