import React, { FC } from 'react';
import Header, { HeaderProps } from '../blocks/Header';
import Footer from '../blocks/Footer';
import ScreenReaderOnly from '../components/ScreenReaderOnly';
import { Main } from './styles';

export interface DefaultLayoutProps {
	headerProps?: HeaderProps;
}
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
