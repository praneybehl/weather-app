// ResponsiveImage styles
import styled from "styled-components/macro";
import {compose, display, height, size, space, width} from "styled-system";

export const ImageStyled: any = styled.img`
	max-width: 100%;
	height: auto;
	${compose(display, size, width, height, space)}
`;
