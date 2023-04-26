import "./WelcomeSection.scss";
import userPhoto from '../../Assets/userPhoto.png';
import Button from "../UI/Button";

import React from 'react';
import ArrowIcon from "../Icons/ArrowIcon";


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
        <a href="/" className="main-section__link">
        <span> <ArrowIcon /> </span>
        Featured Work
        </a>          
        
      </div>
      <div class="main-section__img">
        <img src={userPhoto} alt="designer"/>       
      </div> 
      
      
    </div>
    
  );
}

export default WelcomeSection;