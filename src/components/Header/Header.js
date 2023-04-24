import React, { useState } from "react";
import Burger from "../Burger/Burger";
import LogoIcon from "../Icons/LogoIcon";
import "./Header.scss";

function Header() {
  const [burgerActive, setBurgerActive] = useState(false)
  const items = [{value:"Home", href:'/main'}, {value:"Work", href:'/main'}, {value:"Contact", href:'/main'}, ]
  return (
    <header className="header">
      <div className="container header__container">
      <a href="/" className="header__logo">
        <LogoIcon />
        <span>Logo Here</span>
      </a>
      <nav>
        <ul className="header__ul" id="headerUl">
          <li>
            <a href="/" className="header__a">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="header__a">
              Work
            </a>
          </li>
          <li>
            <a href="/" className="header__a">
              Contact
            </a>
          </li>
          <span class="material-symbols-outlined" id="close" onclick="navToggle()">close</span>
        </ul>
      </nav>

      </div>
      
      <div class="header__burger">
            <span class="material-symbols-outlined" onClick={() => setBurgerActive(!burgerActive)}>
              menu
            </span>

					 <Burger active={burgerActive} setActive={setBurgerActive} items={items}/>
				</div>
    </header>
  );
}

export default Header;
