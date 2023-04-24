import LogoIcon from "../Icons/LogoIcon";
import "./Header.scss";

function Header() {
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
          {/* <span class="material-symbols-outlined" id="close" onclick="navToggle()">close</span> */}
        </ul>
      </nav>

      </div>
      
      {/* <div class="header__burger">
					 <span class="material-symbols-outlined" onclick="navToggle()">menu</span>
				</div> */}
    </header>
  );
}

export default Header;
