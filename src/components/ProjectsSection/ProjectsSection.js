import "./ProjectsSection.scss";
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProjectImage1 from "../../Assets/projects-img1.png";
import ProjectImage2 from "../../Assets/projects-img2.png";
import ProjectImage3 from "../../Assets/projects-img3.png";

import { Pagination, Navigation } from "swiper";
 

export default function ProjectsSection() {
    
    return (
      <div className="container projects">
        <h2 className="title projects__title">Personal Projects</h2>
        <Swiper         
        spaceBetween={24}
        slidesPerView={3}
        loop={true} 
        pagination={{
          clickable: true,
        }}
        navigation={false} 
        modules={[Pagination, Navigation]}     
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={ProjectImage1} alt="project example" /></SwiperSlide>
      <SwiperSlide><img src={ProjectImage2} alt="project example" /></SwiperSlide>
      <SwiperSlide><img src={ProjectImage3} alt="project example" /></SwiperSlide>
      <SwiperSlide><img src={ProjectImage2} alt="project example" /></SwiperSlide>
      ...
    </Swiper>

      </div>
      

          
        
    );
  }