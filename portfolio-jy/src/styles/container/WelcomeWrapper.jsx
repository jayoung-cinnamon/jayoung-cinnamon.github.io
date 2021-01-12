import styled from 'styled-components'

const WelcomeWrapper = styled.div`
  // border:1px solid blue;
	margin: 0 auto;
  width: 100%;
	height:100vh;
	display:flex;
	flex-direction:column;
	font-size:15px;
	justify-content:center;
	
	justify-items: start;
	@media (max-width: 500px) {
		
		font-size:20px;
		width: 90%;
	}
	@media (max-width: 993px) {
		font-size:18px;
		width: 90%;
	}
`

export default WelcomeWrapper;