import React from 'react';
import { Router } from '@reach/router';
import Loader from '../components/Loader';

const HomePage = React.lazy(() => import('../pages/Home'));
const CityWeather = React.lazy(() => import('../pages/CityWeather'));

const AppRoutes = () => {
	return (
		<React.Suspense fallback={<Loader />}>
			<Router>
				<HomePage path="/" />
				<CityWeather path="/city/:cityId/:cityName" />
			</Router>
		</React.Suspense>
	);
};

export default AppRoutes;
