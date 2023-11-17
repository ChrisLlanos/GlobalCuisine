const db = require('../config/connection');
const { Menu, FoodItem } = require('../models');
const menuSeeds = require('./menuSeeds.json');
const foodItemSeeds = require('./foodItemSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async()=>{
    try{
        await cleanDB('Menu', 'menus');
        await FoodItem.create(foodItemSeeds);
        await Menu.create(menuSeeds);

        console.log('finished seeding DB');
        process.exit(0);
    } catch(err){
        throw err;
    }
});