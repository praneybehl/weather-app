import React from 'react';
import {} from 'styled-components';
import ResponsiveImage from '../ResponsiveImage';
import { ThemeSwitcherStyled } from './styles';
import { useThemeSwitcher, modes } from '../../theme/useThemeSwitcher';

const ThemeSwitcher: React.FC = () => {
	const { mode, setMode } = useThemeSwitcher();
	const handleChange = () => {
		if (mode === modes[0]) {
			setMode(modes[1]);
		} else setMode(modes[0]);
		console.log('changed', mode);
	};
	return (
		<div>
			<ThemeSwitcherStyled onClick={handleChange}>
				{mode === modes[0] && (
					<ResponsiveImage
						size={24}
						alt="Switch to light theme"
						src1x="/images/icons/moon.png"
						src2x="/images/icons/moon@2x.png"
						title="Switch to light theme"
					/>
				)}
				{mode === modes[1] && (
					<ResponsiveImage
						size={24}
						alt="Switch to dark theme"
						src1x="/images/icons/sun.png"
						src2x="/images/icons/sun@2x.png"
						title="Switch to dark theme"
					/>
				)}
			</ThemeSwitcherStyled>
		</div>
	);
};

export default ThemeSwitcher;
