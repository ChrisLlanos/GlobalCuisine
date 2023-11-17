const {FoodItem, Menu} = require('../models');

const resolvers = {
    Query: {
        Menus:async () => {
            return await Menu.find({}).populate('FoodItems').populate({
                path: 'FoodItems'
            });
        },
        FoodItems: async () => {
            return await FoodItem.find({}).populate('Menu');
        },

    }
};

module.exports = resolvers;