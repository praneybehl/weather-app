import React, {FC} from 'react';
import {LayoutProps, SpaceProps} from 'styled-system';
import {ImageStyled} from "./styles";

export interface ResponsiveImageProps extends Partial<LayoutProps>, Partial<SpaceProps>{
	src1x: string;
	src2x: string;
	alt?: string | undefined;
}

// ResponsiveImage component
const ResponsiveImage: FC<ResponsiveImageProps> = ({src1x, src2x, ...props}) => (
	<ImageStyled
		src={src1x}
		srcSet={`${src1x} 1x, ${src2x} 2x`}
		{...props}
	/>
);

export default ResponsiveImage;
