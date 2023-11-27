const db = require('../config/connection');
const { FoodItem, Menu } = require('../models');
const foodItemSeeds = require('./foodItemSeeds.json')
const menuSeeds = require('./menuSeeds.json')
const cleanDB = require('./cleanDB');

db.once('open', async()=>{
    try{
        await cleanDB('FoodItem', 'foodItems');
        await cleanDB('Menu', 'menus');
        const foods = await FoodItem.create(foodItemSeeds);
        const Menus = await Menu.create(menuSeeds);
        var counter = 0;
        for(newfood of foods){
            if(counter<3){
                Menus[0].foodItems.push(newfood._id);
                await Menus[0].save();
                counter++;
            }else if((counter>2)&&(counter<6)){
                Menus[1].foodItems.push(newfood._id);
                await Menus[1].save();
                counter++;
            }else if((counter>5)&&(counter<9)){
                Menus[2].foodItems.push(newfood._id);
                await Menus[2].save();
                counter++;
            }
        }


        console.log('finished seeding DB');
        process.exit(0);
    } catch(err){
        throw err;
    }
});