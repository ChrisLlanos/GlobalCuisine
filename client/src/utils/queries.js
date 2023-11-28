import { gql } from '@apollo/client';

export const QUERY_MENUS = gql`
    query getMenus {
        menu {
            _id
            name
            summary
            foodItems
        }
    }

`

export const QUERY_MENU = gql`
    query getMenu($menuId: ID!) {
        menu(menuId: $menuId) {
            _id
            name
            summary
            foodItems {
                _id
                name
                price
                description
            }
        }

    }

`