import React, { useContext, useState, useEffect } from 'react';
import HeaderWrapper from './../../styles/container/HeaderWrapper';
import HeaderContainer from '../../styles/container/HeaderContainer';
import HeaderMenu from './HeaderMenu';
import HeaderLogo from '../../styles/container/Logo';
import '../../styles/sections/header.css';
import { Link, animateScroll as scroll } from "react-scroll";

function Header () {

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
    <header id="header">
      <HeaderContainer>
        <HeaderWrapper>
          <Link to="welcome" smooth={true} duration={1000}>
            <HeaderLogo>&lt; LemonGinger &gt;</HeaderLogo>
          </Link>
          <HeaderMenu/>
        </HeaderWrapper>
      </HeaderContainer>
    </header>
  ); 
};

export default Header;