import "./WelcomeSection.scss";
import userPhoto from '../../Assets/userPhoto.png';
import Button from "../UI/Button";

import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};




function WelcomeSection() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
        <Button onClick={openModal} />        
        
      </div>
      <div class="main-section__img">
        <img src={userPhoto} alt="/" />       
      </div>

      <Modal
        isOpen={modalIsOpen}        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
      
    </div>
    
  );
}

export default WelcomeSection;


