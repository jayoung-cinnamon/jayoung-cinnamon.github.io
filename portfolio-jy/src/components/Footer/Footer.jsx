import FooterContainer from '../../styles/container/FooterContainer';
import FooterWrapper from '../../styles/container/FooterWrapper';
import Logo from '../../styles/container/Logo';
import '../../styles/sections/footer.css';
import FooterIcon from './FooterIcon';
import { Link, animateScroll as scroll } from "react-scroll";


function Footer(){
  return (
    <footer id="footer">
      <FooterContainer>
        <FooterWrapper>
           <Link to="welcome" smooth={true} duration={1000}>
            <Logo>&lt; LemonGinger &#47;&gt;</Logo>
          </Link>
          <FooterIcon/>
        </FooterWrapper>
      </FooterContainer>
    </footer>
  ); 
  
}

export default Footer;