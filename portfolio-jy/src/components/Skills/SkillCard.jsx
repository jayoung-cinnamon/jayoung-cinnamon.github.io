import React from 'react';
import "../../styles/sections/skillcard.css";
import { FontAwesome, FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillCard({skill}){
  return(
    <div className="skillcard-container">
      
      <div className="skillcard-wrapper">
            <div className="skill-icon">
                <i className={skill.fontAwesome}></i>
            </div>
            <div className="skill-text">
                <p>{skill.text}</p>
            </div>
            <div className="skill-progress-bar">
                <span style={{width: `${skill.progress}%`}}></span>
                <p>{skill.progress}%</p>
            </div>
           
      </div>
    </div>
  );
}

export default SkillCard;