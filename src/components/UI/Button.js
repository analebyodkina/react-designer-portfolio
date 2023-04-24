import MailIcon from "../Icons/MailIcon";
import "./Button.scss";



function Button() {
  return (
    <a href="/" className="btn">
        <MailIcon /> 
        hi@yourname.com
    </a> 
    
  );
}

export default Button;