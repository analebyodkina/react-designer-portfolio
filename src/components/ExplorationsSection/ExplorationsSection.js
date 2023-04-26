import "./ExplorationsSection.scss";
import ExploreImage1 from "../../Assets/explore-img1.png";
import ExploreImage2 from "../../Assets/explore-img2.png";
import ExploreImage3 from "../../Assets/explore-img3.png";
import ExploreImage4 from "../../Assets/explore-img4.png";
import ExploreImage5 from "../../Assets/explore-img5.png";
import ExploreImage6 from "../../Assets/explore-img6.png";

export default function ExplorationsSection() {
    return (
        <div class="explore">
            <h2 className="title explore__title">Visual Explorations</h2>     			
			<div className="explore__row container">					
                <div className="row-card">
                    <img src={ExploreImage1} alt="work example" />                    
                </div>
                <div className="row-card">
                    <img src={ExploreImage2} alt="work example" />                    
                </div>
                <div className="row-card">
                    <img src={ExploreImage3} alt="work example" />                    
                </div>
                <div className="row-card">
                    <img src={ExploreImage4} alt="work example" />                    
                </div>
                <div className="row-card">
                    <img src={ExploreImage5} alt="work example" />                    
                </div>
                <div className="row-card">
                    <img src={ExploreImage6} alt="work example" />                    
                </div>
          

      </div>
    </div>
      
    );
  }