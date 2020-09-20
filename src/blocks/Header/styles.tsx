import styled from 'styled-components/macro';

export const HeaderStyled = styled.header`
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.grey50};
	border-bottom: 2px solid ${({ theme }) => theme.colors.grey200};
	height: 60px;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 100;
`;

export const HeaderLogo = styled.a`
	text-decoration: none;
`;

export const HeaderInner = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
