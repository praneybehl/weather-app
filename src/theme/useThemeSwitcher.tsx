import { createContext, useContext } from 'react';
import merge from 'lodash.merge';
import get from 'lodash.get';
import baseTheme from './index';

export const modes = [
	'light',
	'dark'
	// more than two modes can follow...
];

export const getTheme = (mode: string) =>
	merge({}, baseTheme, {
		colors: get(baseTheme.colors.modes, mode, baseTheme.colors)
	});

export const ThemeSwitcherContext = createContext<any>(undefined);

export const useThemeSwitcher = () => useContext(ThemeSwitcherContext);
