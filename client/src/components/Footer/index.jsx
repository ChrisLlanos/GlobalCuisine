import { Link } from 'react-router-dom';

const Footer = () =>{
    return (
        <footer className="bg-dark text-light mb-4 py-3 align-center">
          <div className="container flex-row justify-space-between-lg justify-center align-center">
            <Link className="text-light" to="/cart">
              <h1 className="m-0">Go to Cart</h1>
            </Link>
          </div>
        </footer>
      );
}

export default Footer;