import React from 'react';
import RLoader from 'react-loader-spinner';
import { LoaderContainer } from './styles';

const Loader = () => {
	return (
		<LoaderContainer>
			<RLoader type="Bars" color="#e4573b" height={80} width={80} />
		</LoaderContainer>
	);
};

export default Loader;
