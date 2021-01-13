import React, { useContext, useState, useEffect } from 'react';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';
import Container from './../../styles/container/Container';
import Wrapper from '../../styles/container/Wrapper';
import ProjectCard from './ProjectCard';
import { projects } from '../../portfoliodata';
import "../../styles/sections/project.css";

function Project ( ) {

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
    <section id="project">
      <Container>
        <Wrapper>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <Title title ="Project"/>
         <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={700} distance="30px">
            <div className="project-wrapper">
              
                <div className="project-cards">
                    {projects.lists.map((list, i) => {
                        return <ProjectCard project={list} key={i} />
                    })}
                </div>

            </div>
          </Fade>
          </Fade>
        </Wrapper>
      </Container>
    </section>
  ); 
};

export default Project;