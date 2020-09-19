import React from 'react';
import { cleanup, render } from '../../utils/test-utils';
import CityDetails from './index';

describe('<CityDetails /> block', () => {
	afterEach(cleanup);
	const props = {
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
		description: 'Scattered clouds',
		icon: '03n',
		iconType: 'Clouds',
		maxTemp: 17,
		minTemp: 16,
		temperature: 16
	};

	it('renders the City Weather pre title', () => {
		const { container } = render(<CityDetails {...props} />);
		const preTitle = container.querySelector('h2');
		expect(preTitle.textContent).toMatch('Clouds');
	});

	it('renders the city temprature', () => {
		const { container } = render(<CityDetails {...props} />);
		const temperature = container.querySelector('h1');
		expect(temperature.textContent).toMatch('16°');
	});

	it('renders the feels like temperature', () => {
		const { container } = render(<CityDetails {...props} />);
		const feelsLike = container.querySelectorAll('h2')[1];
		expect(feelsLike.textContent).toMatch('7°');
	});
});
