import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
  return (
    <div className="project-card">
      <h6>{details.title}</h6>
      <div className="work-duration">{details.date}</div>
      <ul>
        {details.company && (
          <li>
            <b>
              <span>Company : {details.company}</span>
            </b>
          </li>
        )}
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
        {details.link && ( // Use logical AND for concise rendering
          <li>
            <a href={details.link} target="_blank">
              {details.link}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProjectCard;
