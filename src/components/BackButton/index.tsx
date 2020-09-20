import React, { FC } from 'react';
import ResponsiveImage from '../ResponsiveImage';
import { GoBackStyled } from './styles';
import { useThemeSwitcher } from '../../theme/useThemeSwitcher';

const GoBackButton: FC = () => {
	const { mode } = useThemeSwitcher();
	const imagesDirectory = `/images/${mode === 'dark' ? 'dark/' : ''}icons/`;

	return (
		<>
			<GoBackStyled to={'/'} role="navigation" aria-label={`Go back to home pager`}>
				<ResponsiveImage
					size={[15, 15, 20]}
					mr={2}
					src1x={`${imagesDirectory}left-arrow.png`}
					src2x={`${imagesDirectory}left-arrow@2x.png`}
				/>
				Go back
			</GoBackStyled>
		</>
	);
};

export default GoBackButton;
