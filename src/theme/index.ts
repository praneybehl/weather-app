// App theme

// Colors Palette
export const primary = '#e4573b';
export const primaryDark = '#ff7b52';
export const white = '#ffffff';
export const grey50 = '#fafafa';
export const grey100 = '#f5f5f5';
export const grey200 = '#eeeeee';
export const grey300 = '#e0e0e0';
export const grey400 = '#bdbdbd';
export const grey500 = '#9e9e9e';
export const grey600 = '#757575';
export const grey700 = '#616161';
export const grey800 = '#424242';
export const grey900 = '#212121';
export const black = '#000000';
export const black15 = 'rgba(0, 0, 0, 0.15)';
export const black25 = 'rgba(0, 0, 0, 0.25)';
export const black50 = 'rgba(0, 0, 0, 0.50)';
export const black75 = 'rgba(0, 0, 0, 0.75)';
export const error = '#cc0000';
export const bodyBg = white;
export const bodyColor = grey900;

// Responsive breakpoints and media-queries (mobile first).
export const breakpoints = ['576px', '768px', '992px', '1200px'];

export const fonts = {
	base: `'Montserrat', sans-serif`,
	caveat: `'Caveat', cursive`
};

export const fontWeights = {
	light: 300,
	regular: 400,
	medium: 500,
	semiBold: 600,
	bold: 700
};

export const headingFontFamily = fonts.base;

export const fontSizes = [
	'1.2rem',
	'1.6rem',
	'2rem',
	'2.4rem',
	'3.2rem',
	'4.8rem',
	'6.4rem',
	'9.2rem'
];

export const bodyText = fontSizes[1];
export const headingWeight = fontWeights.bold;
export const headingLineHeight = 1.4;

const theme = {
	breakpoints,
	mediaQueries: {
		sm: `@media screen and (min-width: ${breakpoints[0]})`,
		md: `@media screen and (min-width: ${breakpoints[1]})`,
		lg: `@media screen and (min-width: ${breakpoints[2]})`,
		xl: `@media screen and (min-width: ${breakpoints[3]})`
	},
	colors: {
		primary,
		white,
		grey50,
		grey100,
		grey200,
		grey300,
		grey400,
		grey500,
		grey600,
		grey700,
		grey800,
		grey900,
		black,
		black15,
		black25,
		black50,
		black75,
		bodyBg,
		bodyColor,
		error,
		modes: {
			dark: {
				primary: primaryDark,
				white: black,
				grey50: grey900,
				grey100: grey900,
				grey200: grey800,
				grey300: grey700,
				grey400: grey600,
				grey500,
				grey600: grey400,
				grey700: grey300,
				grey800: grey200,
				grey900: grey100,
				black: white,
				bodyBg: grey900,
				bodyColor: grey50,
				error
			}
			// other color modes...
		}
	},
	space: [0, 4, 8, 16, 32, 64, 128, 256],
	fonts,
	fontSizes,
	bodyText,
	fontWeights,
	headingWeight,
	headingLineHeight,
	headingFontFamily,
	shadows: {
		small: '0 0 4px rgba(0, 0, 0, .125)',
		large: '0 0 24px rgba(0, 0, 0, .125)'
	},
	maxContainerWidth: '932px'
};

export default theme;
