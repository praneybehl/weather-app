import { RouteComponentProps } from '@reach/router';

export interface CityPageProps extends Partial<RouteComponentProps> {
	cityId?: string;
	cityName?: string;
}
