import MailIcon from "../Icons/MailIcon";
import "./Button.scss";
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');


function Button() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
    <button className="btn" onClick={openModal}>
        <MailIcon /> 
        hi@yourname.com
        <div id="spin"></div>
    </button> 
    <Modal 
        isOpen={modalIsOpen}        
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
        className="Modal"  
    >        

      <div className="modal__container">
        <div className="modal__body">
          <h2 className="modal__title">Subscribe</h2>
          <form className="modal__form">
            <input className="modal__input" type="text" placeholder="Enter your name" />
            <input className="modal__input" type="email" placeholder="Enter your email" />
            <button type="submit" className="modal__button">Submit</button>				
          </form>
          <div class="modal__close"  onClick={closeModal}>
            <span class="material-symbols-outlined">close</span>
          </div>
        </div>
      </div>
            
          
        
        
        
      </Modal>
      
    </>
    
    
  );
}

export default Button;