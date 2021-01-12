import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Project from './components/Project/Project';
import Skill from './components/Skills/Skill';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
