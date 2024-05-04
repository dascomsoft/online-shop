import { useContext} from 'react';
import React,{ useState, useEffect} from 'react';
import "../styles/Navbar.css";
import { CartContext } from '../helpers/Context';
import { Link} from "react-router-dom";


function Navbar() {
  const { cartItems } = useContext(CartContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    // Fermer le dropdown lorsqu'un lien est cliqué
    setIsDropdownOpen(false);
  };


  


    return (
      <div className="header-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top box-shadow py-4">
        <div className="container">
          <Link className="navbar-brand" to="/"><h1>KICK<span class="text-warning">STORE</span></h1></Link>
          <button
            className="navbar-toggler icon bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Inverser l'état du dropdown lors du clic sur le bouton
          >
            <span className="navbar-toggler-icon icon-btn"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav aria-expanded ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-warning fw-bold" to="/" onClick={handleLinkClick}>HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning fw-bold fw-bold" to="/about" onClick={handleLinkClick}>ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning fw-bold" to="/products" onClick={handleLinkClick}>PRODUCTS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning fw-bold" to="/contact" onClick={handleLinkClick}>CONTACT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning fw-bold" to="/cart" onClick={handleLinkClick}>CART({cartItems.length})</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

