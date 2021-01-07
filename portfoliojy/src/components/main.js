import React from 'react';
import Header from './Header/Header';
import Welcome from './Welcome/Welcome';
import Skill from './Skill/Skill';
import Project from './Project/Project';
import Posts from './Posts/Posts';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
 
function Main(){
  return(
    <div className="root">
      <Header />
      <Welcome />
      <Skill />
      <Project />
      <Posts />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;