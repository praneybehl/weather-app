import React, { FC } from 'react';
import DefaultLayout from '../../layouts/default';
import { useWeather } from '../../api';
import { PageHeading, PageHeadingWrap, TodayDate } from '../Home/styles';
import { getFormattedDate, parseCityDetailsProps } from '../../utils';
import Loader from '../../components/Loader';
import CityDetails from '../../blocks/CityDetails';
import { PageContainerStyled } from './styles';
import { CityPageProps } from './types';
import GoBackButton from '../../components/BackButton';

const CityPage: FC<CityPageProps> = ({ cityId = '' }) => {
	const { isLoading, isError, data, error } = useWeather();
	const date = getFormattedDate(new Date());
	const headerTitle = `Weather details`;
	const cityData = data?.list?.find((city) => city.id === parseInt(cityId));
	const cityDetailProps = cityData && parseCityDetailsProps(cityData);
	return (
		<DefaultLayout>
			<PageContainerStyled>
				<GoBackButton />
				<PageHeadingWrap>
					<PageHeading>{headerTitle}</PageHeading>
					<TodayDate>{date}</TodayDate>
				</PageHeadingWrap>
				{isLoading && <Loader />}
				{isError && <span>Error: {error.message}</span>}
				{cityDetailProps && <CityDetails {...cityDetailProps} />}
			</PageContainerStyled>
		</DefaultLayout>
	);
};

export default CityPage;
