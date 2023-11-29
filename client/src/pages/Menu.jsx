import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';

import { QUERY_MENU } from '../utils/queries';

const Menu = () => {
    const location = useLocation();
    console.log(location);
    const menuID = location.state?.id;
    const { loading, data } = useQuery(QUERY_MENU, {
        variables: {menuId: menuID},
    });
    //change to camelcase in typedef and resolv for later
    const MenuData = data?.Menu || {};
    console.log(data);
    if(loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="flex-column justify-space-between my-4">
                {MenuData.foodItems.map((foodItem) => (
                    <div className="card mb-3">
                        <h4 className="card-header bg-dark text-light">
                            {foodItem.name} <br />
                            <span className='text-white' style={{ fontSize: '1rem' }}>
                                {foodItem.description}
                                <br />
                                ${foodItem.price}
                                <button className='btn btn-lg btn primary m-2'>
                                    Add to cart!
                                </button>
                            </span>

                        </h4>
                    </div>
                ))}
            </div>
    );
};

export default Menu;