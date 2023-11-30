import { gql } from '@apollo/client';

export const QUERY_MENUS = gql`
    query getMenus {
        Menus {
            id
            name
            summary
        }
    }

`;

export const QUERY_MENU = gql`
    query getMenu($menuId: ID!) {
        Menu(menuId: $menuId) {
            id
            name
            summary
            foodItems {
                id
                name
                price
                description
                linkToImage
            }
        }

    }

`;

export const QUERY_CART = gql`
    query getCart($cartId: ID!) {
        Cart(cartId: $cartId) {
            items{
                name
                price
                description
                linkToImage
            }
            totalPrice
        }
    }
`;