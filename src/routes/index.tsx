import React from 'react';
import { Router } from '@reach/router';
import Loader from '../components/Loader';
import { WeatherProvider } from '../api';

const HomePage = React.lazy(() => import('../pages/Home'));
const CityWeather = React.lazy(() => import('../pages/CityWeather'));

const AppRoutes = () => {
	return (
		<React.Suspense fallback={<Loader />}>
			<WeatherProvider>
				<Router>
					<HomePage path="/" />
					<CityWeather path="/city/:cityId/:cityName" />
				</Router>
			</WeatherProvider>
		</React.Suspense>
	);
};

export default AppRoutes;
