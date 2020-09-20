import React, { FC } from 'react';
import Container from '../../components/Container';
import { HeaderLogo, HeaderStyled, HeaderInner } from './styles';
import { HeaderProps } from './types';
import { IMAGES_DIRECTORY } from '../../constants';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import { useThemeSwitcher } from '../../theme/useThemeSwitcher';

const Header: FC<HeaderProps> = ({
	logoImgSrc = 'weather_app_logo.svg',
	logoAltText = 'WeatherApp logo',
	logoHref = '/',
	...props
}) => {
	const { mode } = useThemeSwitcher();
	const logoSrc = `${IMAGES_DIRECTORY}${mode === 'dark' ? 'dark/' : ''}${logoImgSrc}`;
	return (
		<HeaderStyled {...props}>
			<Container>
				<HeaderInner>
					<HeaderLogo href={logoHref}>
						<img src={logoSrc} alt={logoAltText} />
					</HeaderLogo>
					<ThemeSwitcher />
				</HeaderInner>
			</Container>
		</HeaderStyled>
	);
};

export default Header;
