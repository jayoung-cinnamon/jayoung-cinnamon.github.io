import FooterContainer from '../../styles/container/FooterContainer';
import FooterWrapper from '../../styles/container/FooterWrapper';
import Logo from '../../styles/container/Logo';
import '../../styles/sections/footer.css';
import FooterIcon from './FooterIcon';

function Footer(){
  return (
    <footer id="footer">
      <FooterContainer>
        <FooterWrapper>
          <Logo>&lt; LemonGinger &#47;&gt;</Logo>
          <FooterIcon/>
        </FooterWrapper>
      </FooterContainer>
    </footer>
  ); 
  
}

export default Footer;