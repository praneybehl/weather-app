import styled, { css } from 'styled-components/macro';
import { Link } from '@reach/router';

export const GoBackStyled = styled(Link)`
	${({ theme }) => css`
		display: flex;
		padding: 0.8rem 0;
		color: ${theme.colors.black};
		font-size: ${theme.fontSizes[1]};
		margin-bottom: ${theme.space[1]};
		text-decoration: underline;
		&:hover,
		&:focus {
			color: ${theme.colors.black};
			text-decoration: none;
		}
		&:visited {
			color: ${theme.colors.black};
		}
		${theme.mediaQueries.lg} {
			font-size: ${theme.fontSizes[2]};
			padding: 1.2rem 0;
			margin-bottom: ${theme.space[1]};
		}
	`}
`;
