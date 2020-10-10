import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import { useWeather } from '../index';
import { WEATHER_API_ENDPOINT, MAJOR_CITY_CODES, OPEN_WEATHER_API_KEY } from '../../constants';
import weatherData from './weatherData.json';

const mockAxios = axios as jest.Mocked<typeof axios>;

describe('API', () => {
	describe.only('useWeather()', () => {
		it('fetches weather data for major Australian capital cities', async () => {
			mockAxios.get.mockImplementationOnce(() =>
				Promise.resolve({
					data: weatherData
				})
			);
			const { result, waitForNextUpdate } = renderHook(() => useWeather());
			await waitForNextUpdate();
			expect(result.current.data).toEqual(weatherData);
			expect(mockAxios.get).toHaveBeenCalledTimes(1);
			expect(mockAxios.get).toHaveBeenCalledWith(WEATHER_API_ENDPOINT, {
				params: {
					appid: OPEN_WEATHER_API_KEY,
					id: MAJOR_CITY_CODES.toString(),
					units: 'metric'
				}
			});
		});
	});
});
