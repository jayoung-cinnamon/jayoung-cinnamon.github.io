import React from 'react';
import './Welcome.css';
import  styled from 'styled-components';

const WelcomeSection = styled.section`
  color: blue;
  border: 1px solid red;
  margin-top: 100px;
  height: 100vh;
`;

const WelcomeInner = styled.div`
 display: flex;
  border: 1px solid blue;
  margin: 0 auto;
  width: 80%;
  height: 100vh;
`;

const WelcomeWrapper = styled.div`
  border: 1px solid green;
  margin-top: 0;
  font-size: 50px;
  color: black;
`;

const Title = styled.div`
  font-size: 120px;
  border: 1px solid red;
`;

const SubTitle = styled.div`
  font-size: 30px;
  border: 1px solid green;
`;

function Welcome(){
  return(
    <WelcomeSection>
      <WelcomeInner>
        <WelcomeWrapper>
          <Title>HI</Title>
          <SubTitle>jayoung</SubTitle>
        </WelcomeWrapper>
      </WelcomeInner>
    </WelcomeSection>
  );
}

export default Welcome;