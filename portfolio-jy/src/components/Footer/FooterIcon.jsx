import React from 'react';
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai';
import {ImPencil} from 'react-icons/im';
import {SiNotion} from 'react-icons/si';
import '../../styles/sections/footerIcon.css';
import {Link}   from 'react-router-dom';

function FooterIcon(){
  return(
    <div className="footerIcon">
      <a href="https://github.com/jayoung-cinnamon" target="_blank"><AiFillGithub size="40"/></a>
      <a href="#"><AiFillLinkedin size="40"/></a>
      <a href="https://velog.io/@lemon-ginger" target="_blank"> <ImPencil size="35"/></a>
      <a href="https://www.notion.so/Programming-96421e0b9a2b424590e8f1e72a920a4e" target="_blank"> <SiNotion size="35"/></a>
    </div>
  );
};

export default FooterIcon;