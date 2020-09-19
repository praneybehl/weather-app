import { RouteComponentProps } from '@reach/router';

export interface HomePageProps extends Partial<RouteComponentProps> {
	pageHeading?: string | undefined;
}
