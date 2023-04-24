import MailIcon from "../Icons/MailIcon";
import "./WelcomeSection.scss";
import userPhoto from '../../Assets/userPhoto.png';
import Button from "../UI/Button";


function WelcomeSection() {
  return (
    <div class="main-section container">
      <div class="main-section__info">
        <h1 class="main-section__title">
          Hi, I am Your Name A Product Designer based in City.
        </h1>
        <div class="desc main-section__desc">
          I help businesses and companies reach their goals by designing
          user-centric digital products & interactive experiences.
        </div>
        <Button />
        
        {/* <a href="/" class="main-section__btn">
            <MailIcon /> 
          hi@yourname.com
        </a> */}
      </div>
      <div class="main-section__img">
        <img src={userPhoto} alt="/" />
       
      </div>
      
    </div>
    
  );
}

export default WelcomeSection;


