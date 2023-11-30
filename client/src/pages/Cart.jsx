import { useQuery } from '@apollo/client';

import { QUERY_CART } from '../utils/queries';

const Cart = () => {
    //had to hard-code the id since dynamic functionality hasn't been implemented without user login working
    const cartID = "65678a3850519cdc2bedf8e8";
    const { loading, data } = useQuery(QUERY_CART, {
        variables: {cartId: cartID},
    });
    console.log(data);
    const cartData = data?.Cart || {};

    if(loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="flex-column justify-space-between my-4">
                {cartData.items.map((foodItem) => (
                    <div className="card mb-3">
                        <h4 className="card-header bg-dark text-light">
                            {foodItem.name} <br />
                            <span className='text-white' style={{ fontSize: '1rem' }}>
                                {foodItem.description}
                                <br />
                                <img src={foodItem.linkToImage} height="100" width="150"></img>
                                <br />
                                ${foodItem.price}
                            </span>

                        </h4>
                    </div>
                ))}
            </div>
    );
};

export default Cart;