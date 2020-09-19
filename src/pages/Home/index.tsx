import React, { FC } from 'react';
import DefaultLayout from '../../layouts/default';
import WeatherTile from '../../components/WeatherTile';
import { useWeather } from '../../api';
import Loader from '../../components/Loader';
import { getFormattedDate, parseCityWeatherProps } from '../../utils';
import { PageContainerStyled, PageHeading, PageHeadingWrap, TodayDate } from './styles';
import ErrorMessage from '../../components/ErrorMessage';
import { HomePageProps } from './types';

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
				{data?.list?.map((city, idx) => {
					const cityDataProps = parseCityWeatherProps(city);
					return <WeatherTile key={idx} {...cityDataProps} />;
				})}
			</PageContainerStyled>
		</DefaultLayout>
	);
};

export default HomePage;
