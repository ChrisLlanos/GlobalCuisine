const { Schema, model } = require('mongoose');

const cartSchema = new Schema(
    {
        foodItem: {
           type: Schema.Types.ObjectId,
           ref: 'FoodItem'
        },
        totalPrice: {
            type: Number,
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
        
    }
);

const Cart = model('Cart', cartSchema);

module.exports = Cart;