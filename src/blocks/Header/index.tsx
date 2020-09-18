import React, {FC} from 'react';
import Container from "../../components/Container";
import {HeaderLogo, HeaderStyled} from "./styles";

export interface HeaderProps {
	logoImgSrc?: string;
	logoAltText?: string;
	logoHref?: string;
}
const Header: FC<HeaderProps> = ({logoAltText, logoHref, logoImgSrc, ...props}) => (
	<HeaderStyled{...props}>
		<Container>
			<HeaderLogo href={logoHref}>
				<img src={logoImgSrc} alt={logoAltText}/>
			</HeaderLogo>
		</Container>
	</HeaderStyled>
);

Header.defaultProps = {
	logoImgSrc: '/images/weather_app_logo.svg',
	logoAltText: 'WeatherApp logo',
	logoHref: '/'
};

export default Header;
