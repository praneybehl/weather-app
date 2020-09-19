import { LayoutProps, SpaceProps } from 'styled-system';

export interface ResponsiveImageProps extends Partial<LayoutProps>, Partial<SpaceProps> {
	src1x: string;
	src2x: string;
	alt?: string | undefined;
}
