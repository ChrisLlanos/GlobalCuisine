import { useQuery } from '@apollo/client';

import MenuCard from '../components/MenuCard';
import DetailedMenu from '../components/DetailedMenu';

import { QUERY_MENU } from '../utils/queries';

const Home = () => {
    return (
        <div>
          <h2>Welcome to Our Restaurant</h2>
          <p>Delicious food just a click away!</p>
          
          <div>
            <Link to="/sign-up">
              <button>Sign Up</button>
            </Link>
            <Link to="/sign-in">
              <button>Sign In</button>
            </Link>
          </div>
        </div>
      );
    };

    export default Home;
