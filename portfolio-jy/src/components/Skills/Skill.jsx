import React, { useContext, useState, useEffect } from 'react';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';
import Container from './../../styles/container/Container';
import Wrapper from '../../styles/container/Wrapper';
import "../../styles/sections/skill.css";
import SkillCard from './SkillCard';
import { skills } from '../../portfoliodata';

function Skill () {

  const [isDesktop,setIsDesktop] = useState(false);
  const [isMobile,setIsMobile]= useState(false);
   useEffect(()=>{
      if(window.innerWidth>769){
        setIsDesktop(true);
        setIsMobile(false);
      }
      else{
        setIsMobile(true);
        setIsDesktop(false);
      }
    },[]);

  return (
    <section id="skill">
      <Container className="skillsection">
        <Wrapper>
          <Title title ="Skill"/>
          
          <Fade bottom duration={1000} delay={800} distance="30px">
            <div className="skill-container">
               <div className="skill-wrapper">
              {skills.lists.map((list,i)=>(
                <SkillCard skill={list} key={i}/>
              ))}
            </div>

             <div className="skill-desc">
                        {skills.describeSkills.map((desc, i) => <p key={i}>{desc}</p>)}
             </div>
            </div>
           

          </Fade>
        </Wrapper>
      </Container>
    </section>
  ); 
};

export default Skill;