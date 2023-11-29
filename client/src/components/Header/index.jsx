import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link className="text-light" to="/">
          <h1 className="m-0">View all Menus</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
