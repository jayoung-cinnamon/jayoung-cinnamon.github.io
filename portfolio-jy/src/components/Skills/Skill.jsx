import React, { useContext, useState, useEffect } from 'react';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';
import Container from './../../styles/container/Container';
import Wrapper from '../../styles/container/Wrapper';

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
      <Container>
        <Wrapper>
          <Title title ="Skills that I can!:)"/>
          <Fade bottom duration={1000} delay={800} distance="30px">
            <div className="skill-wrapper">
              <div className="skill-text">스킬카드</div>
            </div>
          </Fade>
        </Wrapper>
      </Container>
    </section>
  ); 
};

export default Skill;