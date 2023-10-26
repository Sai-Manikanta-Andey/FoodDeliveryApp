import { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  const [button, setButton] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <h1>Andhravala</h1>
      </div>
      <div className="nav-links">
        <ul className="nav-items">
          <li className="nav-item">
            <Link className='Link'  to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className='Link'  to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className='Link'  to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link  className='Link' to="/cart">Cart</Link>
          </li>

          <button className="btn" onClick={() => setButton((prev) => !prev)}>
            {button ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;