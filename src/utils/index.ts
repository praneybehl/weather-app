import { DAYS_OF_WEEK, MONTHS_OF_YEAR } from '../constants';
import { CityWeather } from '../api/types';
import { WeatherTileProps } from '../components/WeatherTile/types';
import { CityDetailsProps } from '../blocks/CityDetails/types';

/**
 * Return responsive icon image source for open weather icon
 * @param icon
 * @returns {{src1x: string, src2x: string}}
 */
export function getResponsiveIconSrc(icon: string) {
	return {
		src1x: `https://openweathermap.org/img/wn/${icon}@2x.png`,
		src2x: `https://openweathermap.org/img/wn/${icon}@4x.png`
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

/**
 * Parses and transforms CityDetails component props data from api data from store
 * @param data {CityWeather} City weather data
 */
export function parseCityDetailsProps(data: CityWeather): CityDetailsProps {
	const {
		name,
		clouds,
		visibility,
		sys: { country, sunrise, sunset },
		wind: { speed: windSpeed, deg: windDegree },
		main: {
			temp: temperature,
			feels_like: feelsLike,
			humidity,
			pressure,
			temp_max: maxTemp,
			temp_min: minTemp
		}
	} = data;
	const { main: iconType, description, icon } = data.weather[0];

	return {
		country,
		cityName: name,
		sunrise: convertTimestamp(sunrise),
		sunset: convertTimestamp(sunset),
		icon,
		description,
		iconType,
		temperature: Math.round(temperature),
		minTemp: Math.round(minTemp),
		maxTemp: Math.round(maxTemp),
		humidity,
		pressure,
		feelsLike: Math.round(feelsLike),
		visibility: visibility / 1000, // m to km
		windSpeed,
		windDegree: windDegree * 3.6, // m/sec to km/hour
		clouds: clouds.all
	};
}

/**
 * Parses and transforms WeatherTile component props data from api data from store
 * @param data {CityWeather} City weather data
 */
export function parseCityWeatherProps(data: CityWeather): WeatherTileProps {
	const {
		id,
		name,
		main: { temp: temperature, temp_max: maxTemp, temp_min: minTemp }
	} = data;
	const { main: iconType, description, icon } = data.weather[0];
	return {
		routeParam: id,
		cityName: name,
		icon,
		iconType,
		description: toSentenceCase(description),
		temperature: Math.round(temperature),
		minTemp: Math.round(minTemp),
		maxTemp: Math.round(maxTemp)
	};
}

/**
 * Returns a formatted time from unix timestamp
 * @param timestamp {number}
 */
export function convertTimestamp(timestamp: number) {
	const date = new Date(timestamp * 1000);
	const hh = date.getHours();
	let h = hh;
	const min = ('0' + date.getMinutes()).slice(-2);
	let ampm = 'AM';
	if (hh > 12) {
		h = hh - 12;
		ampm = 'PM';
	} else if (hh === 12) {
		h = 12;
		ampm = 'PM';
	} else if (hh == 0) {
		h = 12;
	}
	return h + ':' + min + ' ' + ampm;
}
