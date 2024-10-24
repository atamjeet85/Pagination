import React from "react";
import Icon from './skin.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
        <img src={Icon} alt="Logo" />

        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/">Test</a></li>
          <li><a href="/">Atta</a></li>
          <li><a href="/">Suji/Soya Chunks/Bran</a></li>
          <select name="more" >
    <option value="More">
      More
    </option>

          </select>
        </ul>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search" className="search-bar w-70" />
        <div className="cart">
          <span className="cart-count">3</span>
          <i className="fa fa-shopping-cart"></i>
        </div>
        <div className="user-info">
          <span>Hello, Atamjeet</span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;