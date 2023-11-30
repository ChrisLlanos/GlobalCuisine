const typeDefs = `
    type User {
        id: ID!
        username: String!
        email: String!
        cart: Cart
    }

    type Cart{
        id: ID!
        items: [FoodItem]
        totalPrice: Float
        user: User!
    }

    type FoodItem{
        id: ID!
        name: String!
        price: Float!
        description: String!
        linkToImage: String
    }
    type Menu {
        id: ID!
        name: String!
        summary: String!
        foodItems: [FoodItem]
    }

    type Query{
        Cart(cartId: ID!): Cart
        FoodItem(foodItemId: ID!): FoodItem
        Menu(menuId: ID!): Menu
        Menus: [Menu]
    }
    type Mutation {
        createUser(username: String!, email: String!): User
        createCart(userId: ID!): Cart
        addToCart(cartId: ID!, foodItemId: ID!): Cart
        removeFromCart(cartId: ID!, foodItemId: ID!): Cart
    }
`;

module.exports = typeDefs;

//can change parameters for add to cart and remove by using userID instead of cartID