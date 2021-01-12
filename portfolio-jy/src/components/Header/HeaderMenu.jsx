import React,{useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HeaderMenuWrapper from '../../styles/container/HeaderMenuWrapper';



function HeaderMenu(){
  
  return(
    <HeaderMenuWrapper>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#skill">Skill</AnchorLink>
      <AnchorLink href="#project">Project</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
    </HeaderMenuWrapper>
  );
}

export default HeaderMenu;