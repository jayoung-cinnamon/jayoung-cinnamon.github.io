import React from 'react';
import './SkillCard';
import  styled  from 'styled-components';

const CardSection = styled.div`
  background-color:red;
  width:150px;
  height:200px;
  display:flex;
  flex-direction:column;
  margin:10px 10px 0px  0px;
`;

const CardIcon = styled.div`
  background-color:blue;
  width:150px;
  heigth:150px;
`;

const CatdText = styled.div`
  backgroynd-color:yellow;
  width:1500px;
  heigth:40px;
`;

function SkillCard(){
  return(
    <CardSection>
      섹션
      <CardIcon>
        그림들어갈곳
        <CatdText>
          Skill설명
        </CatdText>
      </CardIcon>
    </CardSection>
  );
}
export default SkillCard;