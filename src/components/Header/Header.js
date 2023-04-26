import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Burger from "../Burger/Burger";
import LogoIcon from "../Icons/LogoIcon";
import "./Header.scss";

function Header() {
  const [burgerActive, setBurgerActive] = useState(false)
  const items = [{value:"Home", href:'/'}, {value:"Work", href:'/work'}, {value:"Contact", href:'/'}, ]
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
            <Link to={'/'} className="header__a">Home              
            </Link> 
          </li>
          <li>
          <Link to={'/work'} className="header__a">Work            
          </Link>            
          </li>
            <Link to={'/'} className="header__a">Contact              
            </Link> 
          <li>         
            
          </li>
          {/* <span class="material-symbols-outlined" id="close" onclick="navToggle()">close</span> */}
        </ul>
      </nav>

      </div>
      
      <div class="header__burger">
            <span className="material-symbols-outlined" onClick={() => setBurgerActive(!burgerActive)}>
              menu
            </span>

					 <Burger active={burgerActive} setActive={setBurgerActive} items={items}/>
				</div>
    </header>
  );
}

export default Header;
