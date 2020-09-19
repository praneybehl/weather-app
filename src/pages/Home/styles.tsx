// Page Heading styles
import styled, { css } from 'styled-components/macro';
import Container from '../../components/Container';

export const PageHeadingWrap = styled.div`
	display: flex;
	flex-direction: column-reverse;
	justify-content: left;
	align-items: center;
	margin-bottom: 1.2rem;
	padding: 2.4rem 0 1.8rem;
	text-align: left;
	width: 100%;
	${({ theme }) => css`
		${theme.mediaQueries.md} {
			flex-direction: row;
			justify-content: space-between;
		}
	`}
`;

export const PageHeading = styled.h2`
	${({ theme }) => css`
		display: block;
		color: ${theme.colors.grey900};
		font-size: ${theme.fontSizes[2]};
		font-weight: ${theme.fontWeights.bold};
		align-self: start;
		margin-top: 1.6rem;
		${theme.mediaQueries.md} {
			align-self: unset;
			font-size: ${theme.fontSizes[3]};
			margin-top: 0;
		}
	`};
`;

export const TodayDate = styled.div`
	${({ theme }) => css`
		display: block;
		color: ${theme.colors.grey900};
		font-size: ${theme.fontSizes[1]};
		font-weight: ${theme.fontWeights.medium};
		align-self: start;
		${theme.mediaQueries.md} {
			align-self: unset;
			font-size: ${theme.fontSizes[2]};
		}
	`};
`;

export const PageContainerStyled = styled(Container)`
	display: flex;
	min-height: calc(100vh - 124px);
	flex-direction: column;
	padding: 1.6rem;
	text-align: center;
`;
