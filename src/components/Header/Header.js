import LogoIcon from "../Icons/LogoIcon";
import "./Header.scss";

function Header() {
  return (
    <header class="header container">
      <a href="/" class="header__logo">
        <LogoIcon />
        <span>Logo Here</span>
      </a>
      <nav>
        <ul class="header__ul" id="headerUl">
          <li>
            <a href="/" class="header__a">
              Home
            </a>
          </li>
          <li>
            <a href="/" class="header__a">
              Work
            </a>
          </li>
          <li>
            <a href="/" class="header__a">
              Contact
            </a>
          </li>
          {/* <span class="material-symbols-outlined" id="close" onclick="navToggle()">close</span> */}
        </ul>
      </nav>
      {/* <div class="header__burger">
					 <span class="material-symbols-outlined" onclick="navToggle()">menu</span>
				</div> */}
    </header>
  );
}

export default Header;
