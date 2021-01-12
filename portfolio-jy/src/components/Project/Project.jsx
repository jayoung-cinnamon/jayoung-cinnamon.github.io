import React, { useContext, useState, useEffect } from 'react';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';
import Container from './../../styles/container/Container';
import Wrapper from '../../styles/container/Wrapper';

function Project () {

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
          <Title title ="Project:)"/>
          <Fade bottom duration={1000} delay={700} distance="30px">
            <div className="project-wrapper">
              <div className="project-card"></div>
            </div>
          </Fade>
        </Wrapper>
      </Container>
    </section>
  ); 
};

export default Project;