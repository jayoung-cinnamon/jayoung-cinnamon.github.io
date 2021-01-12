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
            <Title title ="About me 👀"/>
          </Fade>
             <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="About-wrapper">
                 <div className="About-img">
                   <div><img alt="profile" src={jayoung}/></div>
                   <div><img alt="profile2" src={jayoung2}/></div>
                   
                </div>
                <div className="About-text">
                  <div className="About-text-main">
                    Hi!
                  </div>
                  <div className="About-text-sub">
                    I'm jayoung
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, nulla reprehenderit vitae sint necessitatibus, cum tempora ratione officiis animi culpa, magnam aliquid dolore. Voluptatibus eveniet eum eos non, dolor excepturi quis tempora pariatur est molestias aliquam nostrum tenetur dicta repellat doloribus. Maiores nulla nisi nemo aut sapiente beatae magni, eveniet libero quia. Sunt ipsa vitae quod. Possimus aut sapiente reprehenderit voluptates earum eius architecto a, quo dolorum sunt provident distinctio fuga sit ut velit, dolorem libero quae quam ex quasi, nobis maiores id debitis. Obcaecati mollitia esse minima enim doloremque cumque accusamus nam! Eius rerum itaque consectetur, modi iusto sint?
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