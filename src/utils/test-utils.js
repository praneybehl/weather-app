import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components/macro';
import { getTheme, modes, ThemeSwitcherContext } from '../theme/useThemeSwitcher';

const AllTheProviders = ({ children }) => {
	const [mode, setMode] = useState(modes[0]);
	return (
		<ThemeSwitcherContext.Provider value={{ mode, setMode }}>
			<ThemeProvider theme={getTheme(mode)}>{children}</ThemeProvider>
		</ThemeSwitcherContext.Provider>
	);
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
