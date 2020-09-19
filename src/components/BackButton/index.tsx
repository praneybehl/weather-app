import React, { FC } from 'react';
import ResponsiveImage from '../ResponsiveImage';
import { GoBackStyled } from './styles';

const GoBackButton: FC = () => {
	return (
		<>
			<GoBackStyled to={'/'} role="navigation" aria-label={`Go back to home pager`}>
				<ResponsiveImage
					size={20}
					mr={2}
					src1x={'/images/icons/left-arrow.png'}
					src2x={'/images/icons/left-arrow@2x.png'}
				/>
				Go back
			</GoBackStyled>
		</>
	);
};

export default GoBackButton;
