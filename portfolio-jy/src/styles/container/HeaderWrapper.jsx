import styled from 'styled-components'

const HeaderWrapper = styled.div`
	
	margin: 0 auto;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
	justify-content: space-between;
	
	@media (min-width: 601px) {
		width: 100%;
	}
	@media (min-width: 993px) {
		width: 80%;
	}
`

export default HeaderWrapper;