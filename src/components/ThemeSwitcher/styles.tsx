import styled, { css } from 'styled-components/macro';

export const ThemeSwitcherStyled = styled.button`
	${({ theme }) => css`
		display: flex;
		justify-content: center;
		align-items: center;
		background: transparent;
		border-width: 0;
		box-shadow: none;
		padding: ${theme.space[2]};
	`}
`;
