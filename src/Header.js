import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon" />
        {/* {Logo} */}
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionsLineOne">Hello Jasim</span>
          <span className="header__optionsLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionsLineOne">Returns</span>
          <span className="header__optionsLineTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionsLineOne">Your</span>
          <span className="header__optionsLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionsLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;