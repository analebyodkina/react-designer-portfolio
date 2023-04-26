import "./WorkSection.scss";
import WorkImage1 from "../../Assets/work-img1.png";
import WorkImage2 from "../../Assets/work-img2.png";
import WorkImage3 from "../../Assets/work-img3.png";
import WorkImage4 from "../../Assets/work-img4.png";

function WorkSection() {
  return (
    <div class="work">      			
			<div class="work__row row container">					
          <div class="row-card">
              <img src={WorkImage1} alt="work example" />
              <span>InVersion</span>
					</div>
          <div class="row-card">
            <img src={WorkImage2} alt="work example" />
            <span>InVersion</span>						
					</div>
          <div class="row-card">
            <img src={WorkImage3} alt="work example" />	
            <span>InVersion</span>					
					</div>
          <div class="row-card">
            <img src={WorkImage4} alt="work example" />
            <span>InVersion</span>						
					</div>

      </div>
    </div>
    
  );
}

export default WorkSection;



