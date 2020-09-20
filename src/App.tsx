import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/global';
import ScreenReaderOnly from './components/ScreenReaderOnly';
import AppRoutes from './routes';
import { getTheme, modes, ThemeSwitcherContext } from './theme/useThemeSwitcher';

const AppStyled = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const App = () => {
	const [mode, setMode] = useState(modes[0]);
	return (
		<ThemeSwitcherContext.Provider value={{ mode, setMode }}>
			<ThemeProvider theme={getTheme(mode)}>
				<AppStyled>
					<ScreenReaderOnly href="#mainContent">Skip to main content</ScreenReaderOnly>
					<AppRoutes />
					<GlobalStyles />
				</AppStyled>
			</ThemeProvider>
		</ThemeSwitcherContext.Provider>
	);
};

export default App;
