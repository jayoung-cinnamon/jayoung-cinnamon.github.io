import React from 'react';
import './Welcome.css';
import  styled from 'styled-components';

const WelcomeSection = styled.section`
  // background-color:black;
  color: blue;
  border: 1px solid red;
  margin-top: 100px;
  height: 100vh;
`;

const WelcomeInner = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  border: 1px solid blue;
  margin: 0 auto;
  width: 80%;
  height: 100vh;
`;

const WelcomeWrapper = styled.div`
  border: 2px solid red;
  margin-top: 0;
  font-size: 50px;
  color: black;
  // heigth:60%;
  display:flex;
  flex-direction:column;
  align-items:center;

`;

const Title = styled.div`
  font-size: 90px;
  border: 1px solid red;
  margin-bottom:30px;
`;

const SubTitle = styled.div`
  font-size: 30px;
  border: 1px solid green;
  margin-bottom:30px;

`;

const ContactBtn = styled.button`
  background:yellow;
  height:50px;
  width:100px;
  outline: none;
  border: none;
  border-radius: 4px;
  margin-bottom:30px;

  &:hover{
    background:black;
  }
`;

const SocialLink = styled.div`
  background:green;
  height:100px;
  width 200px;
`;

function Welcome(){
  return(
    <WelcomeSection>
      <WelcomeInner>
        <WelcomeWrapper>
          <Title>Hello I'm Lemonginger!</Title>
          <SubTitle>FrontEnd Developer</SubTitle>
          <ContactBtn>Contact</ContactBtn>
          <SocialLink/>
        </WelcomeWrapper>
      </WelcomeInner>
    </WelcomeSection>
  );
}

export default Welcome;