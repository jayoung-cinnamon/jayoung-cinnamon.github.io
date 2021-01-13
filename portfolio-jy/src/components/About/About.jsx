import React, { useContext, useState, useEffect } from 'react';
import Title from '../Title/Title';
import Fade from 'react-reveal/Fade';
import Container from './../../styles/container/Container';
import Wrapper from '../../styles/container/Wrapper';
import "../../styles/sections/about.css";
import jayoung from "../../styles/assets/jayoung.jpg"; 
import jayoung2 from "../../styles/assets/jayoung.png"; 
function About () {

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
    <section id="about">
      <Container>
        <Wrapper>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <Title title ="About me"/>
          </Fade>
             <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="About-wrapper">
                 <div className="About-img">
                   <div><img alt="profile" src={jayoung}/></div>
                   <div><img alt="profile2" src={jayoung2}/></div>
                   
                </div>
                <div className="About-text">
                  <div className="About-text-main">
                    안녕하세요
                  </div>
                  <div className="About-text-sub">
                    프론트엔드 개발자 <span className="highlighttext">육자영</span> 입니다👩🏻‍💻<br/>
                    현재 프론트엔드 개발 공부에 빠져 공부를 하고 있습니다.<br/>
                    <span className="highlighttext">Slow but Steady</span>가 제 좌우명일 만큼<br/>꾸준히 공부하며 발전하는 개발자가 되고싶습니다:)
                  </div>
                </div>
              </div>
            </Fade>
        </Wrapper>
      </Container>
    </section>
  ); 
};

export default About;