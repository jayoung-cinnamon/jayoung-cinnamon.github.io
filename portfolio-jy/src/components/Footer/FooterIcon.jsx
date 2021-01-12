import React from 'react';
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai';
import {ImPencil} from 'react-icons/im';

function FooterIcon(){
  return(
    <div className="footerIcon">
      <a href="https://github.com/jayoung-cinnamon"><AiFillGithub size="30"/></a>
      <a href="#"><AiFillLinkedin size="30"/></a>
      <a href="https://velog.io/@lemon-ginger"> <ImPencil size="25"/></a>
    </div>
  );
};

export default FooterIcon;