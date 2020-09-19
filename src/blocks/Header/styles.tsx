import styled, { css } from 'styled-components/macro';

export const HeaderStyled = styled.header`
	align-items: center;
	background-color: ${({ theme }) => theme.colors.grey50};
	border-bottom: 2px solid ${({ theme }) => theme.colors.grey200};
	display: flex;
	justify-content: start;
	height: 60px;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 100;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			justify-content: center;
		}
	`}
`;
export const HeaderLogo = styled.a`
	text-decoration: none;
`;
