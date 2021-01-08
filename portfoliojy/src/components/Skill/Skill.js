import  React  from 'react';
import SkillCard from '../SkillCard/SkillCard';
import './Skill.css';
import  styled  from 'styled-components';

const SkillSection = styled.section`
  color: salmon;
  border: 1px solid salmon;
  height: 100vh;
  display: flex;
`;

const SkillInner = styled.div`
  display: flex;
  border: 1px solid blue;
  margin: 0 auto;
  width: 80%;
`;

const SkillWrapper = styled.div`
  border: 1px solid green;
  display: flex;
  justify-content:center;
  flex-direction:column;

`;

const CardWrapper = styled.div`
  border:2px solid orange;
  display:flex;
  height:50%;
  width:60%;
  justify-content:space-evenly;
  align-items:center;
  flex-wrap:wrap;
`;

function Skill(){
  return (
    <SkillSection>
      <SkillInner>
        <SkillWrapper>
          <CardWrapper>
            <SkillCard/>
            <SkillCard/>
            <SkillCard/>
            <SkillCard/>
            <SkillCard/>
            <SkillCard/>
            <SkillCard/>
            <SkillCard/>
          </CardWrapper>
          
        </SkillWrapper>
      </SkillInner>
    </SkillSection>
  );
}

export default Skill;