
import Button from "../UI/Button";
import "./ContactSection.scss";


export default function ContactSection() {
    
    return (
        <div class="contact">
            <h2 className="title contact__title">Contact Me</h2>     			
			<div className="contact__desc">	If you are looking to hire a product designer, 
I’m currently available for freelance work	
            </div>
            <div class="contact__button">
                <Button />
            </div>
            
        </div>
    );
  }