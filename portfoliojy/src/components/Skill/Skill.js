import  React  from 'react';
import SkillCard from '../SkillCard/SkillCard';
import './Skill.css';

function Skill(){
  return (
    <section className="section__skill">
      <div className="section__skill inner">
        <div className="section__skill-wrapper">스킬이너</div>
      </div>
      <SkillCard />
    </section>
  );
}

export default Skill;