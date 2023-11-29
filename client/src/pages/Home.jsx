import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { QUERY_MENUS } from '../utils/queries';

const Home = () => {
    const { data } = useQuery(QUERY_MENUS);

    const menus = data?.Menus || [];

    return (data?
        (<main>
            <div className="flex-column justify-space-between my-4">
                {menus.map((menu) => (
                    <div className="card mb-3">
                        <h4 className="card-header bg-dark text-light">
                            {menu.name} <br />
                            <span className='text-white' style={{ fontSize: '1rem' }}>
                                {menu.summary}
                                <br />
                                <Link className='btn btn-lg btn primary m-2' state={menu} to="/menu">
                                    Go to this menu!
                                </Link>
                            </span>

                        </h4>
                    </div>
                ))}
            </div>
        </main>):"loading data"
    );
}

export default Home;