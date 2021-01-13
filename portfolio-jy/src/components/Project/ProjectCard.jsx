import { React } from 'react';
import "../../styles/sections/projectcard.css";


function ProjectCard({project}){
  return(
  <>
   <a className="project-card-main" href={project.url} target="blank">
            <div className="card-title">
                <p>{project.title}</p>
            </div>
            <div className="card-desc">
                <p>{project.desc}</p>
            </div>
    </a>
    </>
  );
};

export default ProjectCard;