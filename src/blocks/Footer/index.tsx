import React from 'react';
import Container from "../../components/Container";
import {FooterStyled, FooterText, LoveIcon} from "./styles";

const Footer = () => {
	const copyRightYear = new Date().getFullYear();
	return (
		<FooterStyled>
			<Container>
				<FooterText>
					Made with
					<LoveIcon role="img" aria-label="love"> ❤ ️</LoveIcon>
					in Melbourne.
					<br />
					© {copyRightYear} Weather App. All rights reserved.
				</FooterText>
			</Container>
		</FooterStyled>
	)
};

Footer.displayName = "Footer";

export default Footer;
