import React, { FC } from 'react';
import Header from '../blocks/Header';
import Footer from '../blocks/Footer';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import { Main } from './styles';
import { DefaultLayoutProps } from './types';

const DefaultLayout: FC<DefaultLayoutProps> = ({ headerProps, children }) => {
	return (
		<>
			<ScreenReaderOnly href="#mainContent">Skip to main content</ScreenReaderOnly>
			<Header {...headerProps} />
			<Main id="mainContent">{children}</Main>
			<Footer />
		</>
	);
};

/**
 * @component
 */
export default DefaultLayout;
