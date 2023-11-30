const {FoodItem, Menu, User, Cart} = require('../models');

const resolvers = {
    Query: {
        // User: async (parent, {userId}) =>{
        //     return User.findById({_id: userId});
        // },
        Cart: async (parent, {cartId}) =>{
            return Cart.findById({_id: cartId}).populate('items');
        },
        //probably don't need to populate all foodItems here just display Menu info...
        Menus: async () => {
            return Menu.find({});
        },
        Menu: async (parent, {menuId}) => {
            return Menu.findById({_id: menuId}).populate('foodItems');
        },
        // getFoodItems: async () => {
        //     return FoodItem.find({});
        // },
        FoodItem: async (parent, {foodItemId}) => {
            return FoodItem.findById({_id: foodItemId});
        }

    },

    Mutation: {
        //Creating new user
        createUser: async (parent,{username, email}) =>{
            try{
                const user = new User({username, email});
                await user.save();
            }catch(error){
                console.error(error);
                throw new Error('Error creating User');
            }
            
        },
        createCart: async (parent, { userId }) => {
          try {
            // Check if the user already has a cart
            const existingCart = await Cart.findOne({ user: userId });
            if (existingCart) {
              throw new Error('User already has a cart');
            }
    
            // Create a new cart
            const newCart = new Cart({ user: userId });
            await newCart.save();
    
            // Update the user's cart reference
            await User.findByIdAndUpdate(userId, { cart: newCart._id });
    
            return newCart;
          } catch (error) {
            console.error(error);
            throw new Error('Error creating cart');
          }
        },
        //Add food item to cart
        addToCart: async (parent,{cartId, foodItemId}) =>{
            try{
                const cart = await Cart.findById({_id: cartId});
                const foodItem = await FoodItem.findById({_id: foodItemId});

                if(!cart || !foodItem){
                    throw new Error('Cart or Food Item not found');
                }
                //push only the id because that's how it's stored in cart
                cart.items.push(foodItem._id);
                await cart.save();

                return cart;
            }catch(error){
                console.error(error);
                throw new Error('Error adding to Cart');
            }
        },

        //Remove food item from cart
        removeFromCart: async (parent,{cartId, foodItemId}) => {
            try{
                const cart = await Cart.findById({cartId});
                const foodItemIndex = cart.items.findIndex(item => item._id === foodItemId);

                if(foodItemIndex !==-1){
                    cart.items.splice(foodItemIndex, 1);
                    await cart.save();
                }

                return cart
            }catch (error){
                console.error(error);
                throw new Error('Error removing items from cart');
            }
        }

    },
    User: {
        // Resolve the cart associated with a user
        cart: async (User) => {
          try {
            const cart = await Cart.findOne({ User: User._id });
            return cart;

          } catch (error) {
            console.error(error);
            throw new Error('Error fetching user cart');
          }
        },
      },
    Cart: {
        // Resolve the user associated with a cart
        user: async (cart) => {
          try {
            const user = await User.findById(cart.user);
            return user;

          } catch (error) {
            console.error(error);
            throw new Error('Error fetching cart user');
          }
        },
        // Resolve the items in the cart
        items: async (cart) => {
          try {
            const foodItems = await FoodItem.find({ _id: { $in: cart.items } });
            return foodItems;

          } catch (error) {
            console.error(error);
            throw new Error('Error fetching cart items');
          }
        },
      },
};

module.exports = resolvers;