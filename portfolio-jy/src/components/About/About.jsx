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
                  <div className="About-text-main">Frontend Developer</div>
                  <span className="highlighttext">육자영</span><br/>
                  <div className="About-text-sub">
                      안녕하세요 신입 프론트엔드 개발자 육자영입니다
                     <span role="img" aria-label="computerwoman">👩🏻‍💻</span><br/>
                     주로 javaScript, React, Css를 이용해 개발을 하고 있습니다.<br/><br/>
                    <span className="highlighttext">Slow but Steady</span><br/>
                    <br/>꾸준히 공부하며 발전하는 개발자가 되고싶습니다:)
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