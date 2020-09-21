import styled, { css } from 'styled-components/macro';

export const CityDetailsStyled = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	max-width: 600px;
	margin: 0 auto;
`;

export const HighlightBox = styled.section`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		border-radius: 2px;
		background: ${theme.colors.white};
		border: ${`2px solid ${theme.colors.grey200}`};
		padding: ${theme.space[3]}px ${theme.space[4]}px;
		${theme.mediaQueries.md} {
			padding: ${theme.space[4]}px ${theme.space[5]}px;
		}
	`}
`;

export const DetailItemBox = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 2px;
		width: 100%;
		background: ${theme.colors.white};
		padding-top: ${theme.space[3]}px;
		${theme.mediaQueries.md} {
			padding-top: ${theme.space[4]}px;
		}
	`}
`;

export const DetailItemTitle = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.bodyColor};
		font-size: ${theme.fontSizes[1]};
		font-weight: ${theme.headingWeight};
		padding: ${theme.space[2]}px 0;
		${theme.mediaQueries.md} {
			font-size: ${theme.fontSizes[3]};
		}
	`}
`;

export const DetailItemValue = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.primary};
		font-size: ${theme.fontSizes[1]};
		font-weight: ${theme.fontWeights.semiBold};
		padding: ${theme.space[3]}px 0;
		${theme.mediaQueries.md} {
			font-size: ${theme.fontSizes[3]};
		}
	`}
`;

export const WeatherContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const WeatherContainerWrap = styled.div`
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			font-size: ${theme.fontSizes[3]};
		}
	`}
`;

export const Conditions = styled.h2`
	${({ theme }) => css`
		display: block;
		color: ${theme.colors.grey600};
		font-size: ${theme.fontSizes[1]};
		font-weight: ${theme.headingWeight};
		line-height: 1.25;
		${theme.mediaQueries.md} {
			font-size: ${theme.fontSizes[2]};
		}
	`}
`;

export const Title = styled.h1`
	${({ theme }) => css`
		display: block;
		color: ${theme.colors.black};
		font-size: ${theme.fontSizes[6]};
		font-weight: ${theme.headingWeight};
		line-height: 1.1;
		padding-top: ${theme.space[3]}px;
		${theme.mediaQueries.md} {
			font-size: ${theme.fontSizes[7]};
		}
	`}
`;

export const ConditionSummary = styled.h1`
	${({ theme }) => css`
		display: block;
		color: ${theme.colors.bodyColor};
		font-size: ${theme.fontSizes[1]};
		font-weight: ${theme.fontWeights.semiBold};
		line-height: 1.23;
		padding-bottom: ${theme.space[3]}px;
		${theme.mediaQueries.md} {
			font-size: ${theme.fontSizes[2]};
		}
	`}
`;

export const CityName = styled.h2`
	${({ theme }) => css`
		color: ${theme.colors.grey800};
		font-size: ${theme.fontSizes[2]};
		font-weight: ${theme.fontWeights.bold};
		${theme.mediaQueries.md} {
			font-size: ${theme.fontSizes[4]};
		}
		${theme.mediaQueries.lg} {
			font-size: ${theme.fontSizes[4]};
		}
	`};
`;
