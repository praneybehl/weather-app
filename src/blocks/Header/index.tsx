import React, { FC } from 'react';
import Container from '../../components/Container';
import { HeaderLogo, HeaderStyled } from './styles';
import { HeaderProps } from './types';

const Header: FC<HeaderProps> = ({
	logoImgSrc = '/images/weather_app_logo.svg',
	logoAltText = 'WeatherApp logo',
	logoHref = '/',
	...props
}) => (
	<HeaderStyled {...props}>
		<Container>
			<HeaderLogo href={logoHref}>
				<img src={logoImgSrc} alt={logoAltText} />
			</HeaderLogo>
		</Container>
	</HeaderStyled>
);

export default Header;
