import React, { FC } from 'react';
import { ContainerStyled } from './styles';

const Container: FC = ({ children, ...props }) => (
	<ContainerStyled {...props}>{children}</ContainerStyled>
);

export default Container;
