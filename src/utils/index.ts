import { DAYS_OF_WEEK, MONTHS_OF_YEAR } from '../constants';

/**
 * Return responsive icon image source for open weather icon
 * @param icon
 * @returns {{src1x: string, src2x: string}}
 */
export function getResponsiveIconSrc(icon: string) {
	return {
		src1x: `http://openweathermap.org/img/wn/${icon}@2x.png`,
		src2x: `http://openweathermap.org/img/wn/${icon}@4x.png`
	};
}

/**
 * Retrun the provided number with it's ordinal as postfix eg. 4 -> '4th'
 * @param n {number}
 * @returns {string}
 */
export function getNumberOrdinal(n: number) {
	const s = ['th', 'st', 'nd', 'rd'],
		v = n % 100;
	return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

/**
 * Return formatted current date eg. Saturday, September 19th
 */
export function getFormattedDate() {
	const today = new Date();
	const day = DAYS_OF_WEEK[today.getDay()];
	const month = MONTHS_OF_YEAR[today.getMonth()];
	const date = today.getDate();
	return `${day}, ${month} ${getNumberOrdinal(date)}`;
}

/**
 * Returns the string with first letter capitalised.
 * @param str {string}
 * @returns {string}
 */
export function toSentenceCase(str: string) {
	return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
}
