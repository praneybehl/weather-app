import {
	getResponsiveIconSrc,
	getNumberOrdinal,
	getFormattedDate,
	toSentenceCase,
	parseCityDetailsProps,
	parseCityWeatherProps,
	convertTimestamp
} from '../index';

const sampleCityWeatherData = {
	coord: {
		lon: 151.21,
		lat: -33.87
	},
	sys: {
		country: 'AU',
		timezone: 36000,
		sunrise: 1600285909,
		sunset: 1600328866
	},
	weather: [
		{
			id: 802,
			main: 'Clouds',
			description: 'scattered clouds',
			icon: '03n'
		}
	],
	main: {
		temp: 16.3,
		feels_like: 7.27,
		temp_min: 15.56,
		temp_max: 17,
		pressure: 1026,
		humidity: 77
	},
	visibility: 10000,
	wind: {
		speed: 13.9,
		deg: 160
	},
	clouds: {
		all: 40
	},
	dt: 1600337435,
	id: 2147714,
	name: 'Sydney'
};

describe('Utilities', () => {
	describe('getResponsiveIconSrc()', () => {
		it('should return props for responsive image based on open weather icon', () => {
			const iconCode = '04d';
			const resProps = getResponsiveIconSrc(iconCode);
			expect(resProps).toEqual({
				src1x: `https://openweathermap.org/img/wn/${iconCode}@2x.png`,
				src2x: `https://openweathermap.org/img/wn/${iconCode}@4x.png`
			});
		});
	});

	describe('getNumberOrdinal()', () => {
		it('should return an ordinal of number', () => {
			expect(getNumberOrdinal(23)).toBe('23rd');
		});
	});

	describe('getFormattedDate()', () => {
		it('should return formatted current date', () => {
			const date = new Date('09/19/2020');
			expect(getFormattedDate(date)).toBe('Saturday, September 19th');
		});
	});

	describe('toSentenceCase()', () => {
		it('should capitalise first letter of the string', () => {
			expect(toSentenceCase('broken clouds')).toBe('Broken clouds');
		});
	});

	describe('parseCityWeatherProps()', () => {
		it('should parse correct CityDetails components props data from api data', () => {
			expect(parseCityWeatherProps(sampleCityWeatherData)).toEqual({
				cityName: 'Sydney',
				description: 'Scattered clouds',
				icon: '03n',
				iconType: 'Clouds',
				maxTemp: 17,
				minTemp: 16,
				routeParam: 2147714,
				temperature: 16
			});
		});
	});

	describe('parseCityDetailsProps()', () => {
		it('should parse correct WeatherTile components props data from api data', () => {
			expect(parseCityDetailsProps(sampleCityWeatherData)).toEqual({
				country: 'AU',
				sunrise: '5:51 AM',
				sunset: '5:47 PM',
				pressure: 1026,
				humidity: 77,
				feelsLike: 7,
				visibility: 10,
				windSpeed: 13.9,
				windDegree: 576,
				clouds: 40,
				cityName: 'Sydney',
				description: 'scattered clouds',
				icon: '03n',
				iconType: 'Clouds',
				maxTemp: 17,
				minTemp: 16,
				temperature: 16
			});
		});
	});

	describe('convertTimestamp()', () => {
		it('should return a formatted time from unix timestamp', () => {
			expect(convertTimestamp(1600285909)).toBe('5:51 AM');
		});
	});
});
