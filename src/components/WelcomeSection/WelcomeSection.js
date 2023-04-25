import "./WelcomeSection.scss";
import userPhoto from '../../Assets/userPhoto.png';
import Button from "../UI/Button";

import React from 'react';


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
        
      </div>
      <div class="main-section__img">
        <img src={userPhoto} alt="designer" />       
      </div>      
      
    </div>
    
  );
}

export default WelcomeSection;