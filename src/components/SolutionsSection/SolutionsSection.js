import React,{useEffect} from "react";
import "./SolutionsSection.scss";
import SolutionImg1 from "../../Assets/page2/solution1.png";
import SolutionImg2 from "../../Assets/page2/solution2.png";

import AOS from 'aos';
import 'aos/dist/aos.css';


function SolutionsSection() {  
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className="solutions container">				
			<div className="solutions__row">
				<div className="solutions__img" data-aos="fade-right" data-aos-duration="1200">
					<img src={SolutionImg1} alt="example" />
				</div>
				<div className="solutions__info">
					<h3 className="page2-title solutions__title">solution 1</h3>
					<div className="solutions__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
				</div>
			</div>
            <div className="solutions__row">
				<div className="solutions__img" data-aos="fade-left" data-aos-duration="1200" delay="200">
					<img src={SolutionImg2} alt="example" />
				</div>
				<div className="solutions__info">
					<h3 className="page2-title solutions__title">solution 2</h3>
					<div className="solutions__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
				</div>
			</div>  
		</div>    
    
  );
}

export default SolutionsSection;