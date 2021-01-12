import styled  from 'styled-components';

const HeaderMenuWrapper = styled.div`
a{
  color:black;
  text-decoration:none;
}
    ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;
			@media (max-width: 960px) {
					display: none;
			}
			a {
					margin-right: 1rem;
					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding-right: 2rem;
      display: flex;
      margin-top:1rem;
      align-items:center;
      justify-content: space-between;
			//flex-direction: column;
			a {
          margin-right: 2rem;
          margin-bottom: 1rem;
          
					// &:last-child {
					// 		margin-bottom: unset;
					// }
			}
	`}
`;

export default HeaderMenuWrapper;