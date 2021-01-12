import styled from 'styled-components'

const FooterWrapper = styled.div`
 
	margin: 0 auto;
  max-width: 100%;
	height:150px;
	display:flex;
	align-items:center;
	justify-content:space-between;
	font-weight:200;
	justify-items: start;
	@media (min-width: 601px) {
		width: 100%;
	}
	@media (min-width: 993px) {
		width: 80%;
	}
`

export default FooterWrapper;