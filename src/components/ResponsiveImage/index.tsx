import React, { FC } from 'react';
import { ImageStyled } from './styles';
import { ResponsiveImageProps } from './types';

const ResponsiveImage: FC<ResponsiveImageProps> = ({ src1x, src2x, ...props }) => (
	<ImageStyled src={src1x} srcSet={`${src1x} 1x, ${src2x} 2x`} {...props} />
);

export default ResponsiveImage;
