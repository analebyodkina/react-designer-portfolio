import { Link, useLocation } from 'react-router-dom';
import LogoIcon from "../Icons/LogoIcon";
import "./Header.scss";
import { useState, useEffect } from 'react';

function Header() {
  
  const [active, setActive] = useState(false);
  const location = useLocation();

  function navToggle() {
    setActive(!active);
  }

  useEffect(() => {
    var links = document.getElementById('headerUl');
    links.classList.remove("active");
  }, [location]);

  return (
    <header className="header">
      <div className="container header__container">
          <a href="/" className="header__logo">
            <LogoIcon />
            <span>Logo Here</span>
          </a>

          <nav>
          <ul className={`header__ul ${active ? 'active' : ''}`} id="headerUl">
              <li>
                <Link to={'/'} className="header__a">Home              
                </Link> 
              </li>
              <li>
              <Link to={'/work'} className="header__a">Work            
              </Link>            
              </li>            
              <li>         
                <Link to={'/'} className="header__a">Contact              
                </Link> 
              </li>
              <span className="material-symbols-outlined icon-close" id="close" onClick={navToggle}>close</span>
            </ul>
          </nav>

          <div className="header__burger">
            <span className="material-symbols-outlined" onClick={navToggle}>
              menu
            </span>
          </div>

			</div>
    </header>
  );
}

export default Header;
