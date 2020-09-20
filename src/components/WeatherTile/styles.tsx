import styled, { css } from 'styled-components/macro';
import { Link } from '@reach/router';

export const TileStyled = styled(Link)`
	${({ theme }) => css`
		background-color: ${theme.colors.white};
		color: inherit;
		display: flex;
		border-radius: 2px;
		background: ${theme.colors.grey200};
		background: linear-gradient(
			120deg,
			${theme.colors.grey500} 0%,
			${theme.colors.grey200} 25%,
			${theme.colors.grey200} 100%
		);
		border: ${`2px solid ${theme.colors.grey200}`};
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2.4rem;
		padding: 1.4rem 1.8rem;
		position: relative;
		width: 100%;
		text-decoration: none;
		transition: all 0.3s ease;
		&:focus,
		&:hover {
			border-color: ${theme.colors.black};
			background: ${theme.colors.grey300};
		}
		${theme.mediaQueries.md} {
			padding: 3.2rem 4.8rem;
		}
	`};
`;

export const TemperatureWrap = styled.div`
	display: inline-block;
`;

export const Subtitle = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.black};
		font-size: ${theme.fontSizes[1]};
		padding-top: ${theme.space[3]}px;
		${theme.mediaQueries.sm} {
			padding-top: ${theme.space[4]}px;
			font-size: ${({ theme }) => theme.fontSizes[2]};
		}
	`};
`;

export const LowHighTemp = styled(Subtitle)`
	${({ theme }) => css`
		padding-top: ${theme.space[2]}px;
		${theme.mediaQueries.sm} {
			padding-top: ${theme.space[3]}px;
			font-size: ${({ theme }) => theme.fontSizes[2]};
		}
	`}
`;

export const IconText = styled(Subtitle)`
	padding-top: 0;
`;

export const Temperature = styled.h3`
	${({ theme }) => css`
		color: ${theme.colors.black};
		font-size: ${theme.fontSizes[4]};
		font-weight: ${theme.fontWeights.bold};
		${theme.mediaQueries.md} {
			font-size: ${theme.fontSizes[6]};
		}
		${theme.mediaQueries.lg} {
			font-size: ${theme.fontSizes[6]};
		}
	`};
`;

export const CityName = styled.h2`
	${({ theme }) => css`
		color: ${theme.colors.bodyColor};
		font-size: ${theme.fontSizes[2]};
		font-weight: ${theme.fontWeights.bold};
		text-decoration: underline;
		${theme.mediaQueries.md} {
			font-size: ${theme.fontSizes[4]};
		}
		${theme.mediaQueries.lg} {
			font-size: ${theme.fontSizes[4]};
		}
	`};
`;
