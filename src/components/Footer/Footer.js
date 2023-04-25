import BehanceIcon from "../Icons/BehanceIcon";
import Dribblecon from "../Icons/DribbleIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import TwitterIcon from "../Icons/Twittericon";
import ViberIcon from "../Icons/ViberIcon";
import "./Footer.scss";


function Footer() {
  return (
    <div class="footer">
        <div class="container footer__container">
            <div class="footer__copyright">Made by<span> Your Name</span> — Copyright 2021</div>
            <nav>
                <ul class="footer__links">
                    <li><a href="https://www.viber.com/" target="blank"><ViberIcon /></a></li>
                    <li><a href="https://dribbble.com/" target="blank"><Dribblecon /></a></li>
                    <li><a href="https://www.linkedin.com/" target="blank"><LinkedinIcon /></a></li>
                    <li><a href="https://twitter.com/" target="blank"><TwitterIcon /></a></li>
                    <li><a href="https://www.behance.net/" target="blank"><BehanceIcon /></a></li>                    
                </ul>
            </nav>
        </div>
        
	</div>
    
  );
}

export default Footer;