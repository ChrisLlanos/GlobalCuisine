const { Schema, model } = require('mongoose');

const cartSchema = new Schema(
    {
        items: [{
           type: Schema.Types.ObjectId,
           ref: 'FoodItem',
        }],
        totalPrice: {
            type: Number,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }
        
    }
);

const Cart = model('Cart', cartSchema);

module.exports = Cart;