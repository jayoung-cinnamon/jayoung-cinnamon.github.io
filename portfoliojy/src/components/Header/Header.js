import React from 'react';
import './Header.css';


function Header(){
  return (
    <header className="header">
      <div className="header inner">
        <div className="header inner-logo">로고자리</div>
        <div className="header inner-menu">메뉴자리</div>
      </div>
    </header>
  );
}

export default Header;