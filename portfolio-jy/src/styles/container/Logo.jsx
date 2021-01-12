import styled from 'styled-components';

const HeaderLogo = styled.div`
background-color: rgba(255, 255, 255, 0.0);
	
	width:180px;
	height:50px;
	line-height:50px;
	font-size:20px;
	text-align:center;
	font-weight:600;
	color:#0a5562;
	border-radius:2px;
	cursor:pointer;
	&:hover{
		background-color: rgba(255, 255, 255, 0.2);
		transition: all 0.3s;
	}
`;

export default HeaderLogo;