import React, { useRef } from "react";
import "./Projects.css";
import { PROJECTS } from "../../utils/data";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 796,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };
  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <section id="project-card-container" className="project-container">
      <h5>Projects</h5>
      <div className="project-content">
        <div className="arrow-right" onClick={slideRight}>
          <KeyboardArrowRightIcon />
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <KeyboardArrowLeftIcon />
        </div>
        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map((item) => (
            <ProjectCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
