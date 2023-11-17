const {FoodItem, Menu} = require('../models');

const resolvers = {
    Query: {
        Menus: async () => {
            return Menu.find();
        },
        Menu: async (parent, {menuID}) => {
            return Menu.findOne({_id: menuID});
        },
        FoodItems: async () => {
            return FoodItem.find();
        },
        FoodItem: async (parent, {foodItemID}) => {
            return FoodItem.find({_id: foodItemID});
        }

    },

    Mutation: {
        

    },
};

module.exports = resolvers;