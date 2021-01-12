import styled from 'styled-components'

const FooterContainer = styled.div`
 
  max-width: 100%;
	margin: 0 auto;
	width: 100%;
	height: 150px;
	
	@media (min-width: 601px) {
		width: 80%;
	}
	@media (min-width: 993px) {
		width: 100%;
	}
`

export default FooterContainer;