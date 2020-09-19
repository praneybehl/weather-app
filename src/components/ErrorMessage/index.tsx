import styled, { css } from 'styled-components/macro';

const ErrorMessage = styled.div`
	${({ theme }) => css`
		padding: ${theme.space[4]} ${theme.space[2]};
		color: ${theme.colors.error};
		font-size: ${theme.fontSizes[2]};
		font-weight: ${theme.fontWeights.semiBold};
	`}
`;

export default ErrorMessage;
