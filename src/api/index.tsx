import React, { FC } from 'react';
import axios from 'axios';
import { MAJOR_CITY_CODES, OPEN_WEATHER_API_KEY, WEATHER_API_ENDPOINT } from '../constants';
import { QueryCache, ReactQueryCacheProvider, useQuery } from 'react-query';
import { WeatherApiData } from './types';
import { WEATHER_QUERY } from '../constants';

export const WeatherCache = new QueryCache({
	defaultConfig: {
		queries: {
			// Cache the query for 10 mins.
			staleTime: 60 * 60 * 1000
		}
	}
});

export const WeatherProvider: FC = ({ children }) => {
	return <ReactQueryCacheProvider queryCache={WeatherCache}>{children}</ReactQueryCacheProvider>;
};

export function useWeather() {
	return useQuery<WeatherApiData, any>(WEATHER_QUERY, async () => {
		const { data } = await axios.get(WEATHER_API_ENDPOINT || '', {
			params: {
				id: MAJOR_CITY_CODES.toString(),
				appid: OPEN_WEATHER_API_KEY,
				units: 'metric'
			}
		});
		return data;
	});
}
