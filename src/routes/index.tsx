import React from 'react';
import { Router } from '@reach/router';
import Loader from '../components/Loader';

const HomePage = React.lazy(() => import('../pages/Home'));

const AppRoutes = () => {
	return (
		<React.Suspense fallback={<Loader />}>
			<Router>
				<HomePage path="/" />
			</Router>
		</React.Suspense>
	);
};

export default AppRoutes;
