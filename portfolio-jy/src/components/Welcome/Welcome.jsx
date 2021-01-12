import React, { useContext, useState, useEffect } from 'react';
import Container from './../../styles/container/Container';
import Fade from 'react-reveal/Fade';
import '../../styles/sections/welcome.css';
import { Link, animateScroll as scroll } from "react-scroll";
import WelcomeWrapper from './../../styles/container/WelcomeWrapper';

function Welcome(){
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

  return(
    <secion id="welcome">
      <Container>
        <WelcomeWrapper>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <div className="welcome-title">Hi, my name is <span className="welcome-title-color">jayoung<span className="welcome-hand">👋🏻</span></span></div>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div className="welcome-subtitle">
              I'm the Frontend Developer✨
            </div>
              <Link to="contact" smooth={true} duration={1000}>
                <div className="contactBtn">
                    <span>Contact Me!</span>
                </div>
              </Link>
          </Fade>
        </WelcomeWrapper>
      </Container>
    </secion>
  );
};

export default Welcome;