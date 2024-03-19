import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addcart,removecart } from '../Redux/cardSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export default function Navbar() {
  const cosmatics = useSelector((state) => state.Mycart );
  const navigate = useNavigate();
  

  const cartItemCount = cosmatics.length;

  console.log(cartItemCount);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className="container">
        <Link className="navbar-brand" to='/'>Cosmetics Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
            <button type="button" className="btn position-relative" onClick={() => navigate('/cart')}>
            <ShoppingCartIcon></ShoppingCartIcon>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItemCount > 0 ? cartItemCount : '0'}
                <span className="visually-hidden">unread messages</span>
            </span>
        </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
