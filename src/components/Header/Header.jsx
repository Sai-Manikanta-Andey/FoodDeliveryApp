import { useState } from 'react'
import './Header.css'
const Header = () => {
  const [button, setButton] = useState(false);
  return (
    
    <div className="header">
      <div className="logo">
        <h1>Andhravala</h1>
      </div>
      <div className="nav-links">
        <ul className="nav-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
          <button className='btn' onClick={()=>setButton((prev)=>!prev)}> {button?"Login":"Logout"} </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;