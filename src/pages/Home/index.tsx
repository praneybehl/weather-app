import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import DefaultLayout from '../../layouts/default';
import WeatherTile from '../../components/WeatherTile';
import { useWeather } from '../../api';
import Loader from '../../components/Loader';
import { getFormattedDate, toSentenceCase } from '../../utils';
import { PageContainerStyled, PageHeading, PageHeadingWrap, TodayDate } from './styles';
import ErrorMessage from '../../components/ErrorMessage';

export interface HomePageProps extends Partial<RouteComponentProps> {
	pageHeading?: string | undefined;
}

const HomePage: FC<HomePageProps> = ({ pageHeading = 'Weather - Australian capital cities' }) => {
	const { isLoading, isError, data, error } = useWeather();
	const date = getFormattedDate();
	return (
		<DefaultLayout>
			<PageContainerStyled>
				<PageHeadingWrap>
					<PageHeading>{pageHeading}</PageHeading>
					<TodayDate>{date}</TodayDate>
				</PageHeadingWrap>
				{isLoading && <Loader />}
				{isError && <ErrorMessage>Error: {error.message}</ErrorMessage>}
				{data?.list?.map((city, idx) => (
					<WeatherTile
						key={idx}
						routeParam={city.id}
						cityName={city.name}
						icon={city.weather[0].icon}
						iconType={city.weather[0].main}
						description={toSentenceCase(city.weather[0].description)}
						temperature={Math.round(city.main.temp)}
						minTemp={Math.round(city.main.temp_min)}
						maxTemp={Math.round(city.main.temp_max)}
					/>
				))}
			</PageContainerStyled>
		</DefaultLayout>
	);
};

export default HomePage;
