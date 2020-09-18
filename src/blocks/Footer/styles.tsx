import styled from "styled-components/macro";

export const FooterStyled = styled.footer`
	align-items: center;
	background-color: ${({theme}) => theme.colors.grey50};
	border-top: 2px solid ${({theme}) => theme.colors.grey200};
	display: flex;
	padding: 1.6rem 0;
`;
export const FooterText = styled.div`
	display: block;
	color: ${({theme}) => theme.colors.grey800};
	font-size: ${({theme}) => theme.fontSizes[0]};
	font-weight: ${({theme}) => theme.fontWeights.medium};
	line-height: 1.3;
	text-align: center;
`;
export const LoveIcon = styled.span`
	color: ${({theme}) => theme.colors.primary};
`;
