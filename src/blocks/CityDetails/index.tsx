import React, { FC } from 'react';
import {
	CityDetailsStyled,
	CityName,
	Conditions,
	ConditionSummary,
	DetailItemBox,
	DetailItemTitle,
	DetailItemValue,
	HighlightBox,
	Title,
	WeatherContainer,
	WeatherContainerWrap
} from './styles';
import ResponsiveImage from '../../components/ResponsiveImage';
import { getResponsiveIconSrc } from '../../utils';
import { CityDetailsProps } from './types';

const CityDetails: FC<CityDetailsProps> = (props) => {
	return (
		<CityDetailsStyled>
			<HighlightBox>
				<WeatherContainer>
					<div>
						<Conditions>{props.iconType}</Conditions>
						<Title>{props.temperature}°</Title>
						<Conditions>Feels like: {props.feelsLike}°</Conditions>
					</div>
					<ResponsiveImage
						size={[100, 100, 200]}
						mt={[0, '-2.2rem']}
						mr={[0, '-3.2rem']}
						{...getResponsiveIconSrc(props.icon)}
					/>
				</WeatherContainer>
				<ConditionSummary>
					Currently, {props.description} with a high of {props.maxTemp}° and lows of{' '}
					{props.minTemp}°.
				</ConditionSummary>
				<CityName>
					<ResponsiveImage
						size={25}
						mr={1}
						ml={-1}
						src1x="/images/icons/pin.png"
						src2x="/images/icons/pin@2x.png"
					/>
					{props.cityName}, {props.country}
				</CityName>
			</HighlightBox>
			<WeatherContainerWrap>
				<WeatherContainer>
					<DetailItemBox>
						<DetailItemTitle>Sunrise</DetailItemTitle>
						<ResponsiveImage
							size={[35, 70]}
							mr={1}
							ml={-1}
							src1x="/images/icons/sunrise.png"
							src2x="/images/icons/sunrise@2x.png"
						/>
						<DetailItemValue>{props.sunrise}</DetailItemValue>
					</DetailItemBox>
					<DetailItemBox>
						<DetailItemTitle>Sunset</DetailItemTitle>
						<ResponsiveImage
							size={[35, 70]}
							mr={1}
							ml={-1}
							src1x="/images/icons/sunset.png"
							src2x="/images/icons/sunset@2x.png"
						/>
						<DetailItemValue>{props.sunset}</DetailItemValue>
					</DetailItemBox>
					<DetailItemBox>
						<DetailItemTitle>Clouds</DetailItemTitle>
						<ResponsiveImage
							size={[35, 70]}
							mr={1}
							ml={-1}
							src1x="/images/icons/cloud.png"
							src2x="/images/icons/cloud@2x.png"
						/>
						<DetailItemValue>{props.clouds}%</DetailItemValue>
					</DetailItemBox>
				</WeatherContainer>
				<WeatherContainer>
					<DetailItemBox>
						<DetailItemTitle>Pressure</DetailItemTitle>
						<ResponsiveImage
							size={[35, 70]}
							mr={1}
							ml={-1}
							src1x="/images/icons/pressure.png"
							src2x="/images/icons/pressure@2x.png"
						/>
						<DetailItemValue>{props.pressure}hPa</DetailItemValue>
					</DetailItemBox>
					<DetailItemBox>
						<DetailItemTitle>Visibility</DetailItemTitle>
						<ResponsiveImage
							size={[35, 70]}
							mr={1}
							ml={-1}
							src1x="/images/icons/visibility.png"
							src2x="/images/icons/visibility@2x.png"
						/>
						<DetailItemValue>{props.visibility}km</DetailItemValue>
					</DetailItemBox>
					<DetailItemBox>
						<DetailItemTitle>Humidity</DetailItemTitle>
						<ResponsiveImage
							size={[35, 70]}
							mr={1}
							ml={-1}
							src1x="/images/icons/humidity.png"
							src2x="/images/icons/humidity@2x.png"
						/>
						<DetailItemValue>{props.humidity}%</DetailItemValue>
					</DetailItemBox>
				</WeatherContainer>
				<WeatherContainer>
					<DetailItemBox>
						<DetailItemTitle>Wind Speed</DetailItemTitle>
						<ResponsiveImage
							size={[35, 70]}
							mr={1}
							ml={-1}
							src1x="/images/icons/windSpeed.png"
							src2x="/images/icons/windSpeed@2x.png"
						/>
						<DetailItemValue>{props.windSpeed}km/hr</DetailItemValue>
					</DetailItemBox>
					<DetailItemBox>
						<DetailItemTitle>Wind Direction</DetailItemTitle>
						<ResponsiveImage
							size={[35, 70]}
							mr={1}
							ml={-1}
							src1x="/images/icons/windDegree.png"
							src2x="/images/icons/windDegree@2x.png"
						/>
						<DetailItemValue>{props.windDegree}deg</DetailItemValue>
					</DetailItemBox>
				</WeatherContainer>
			</WeatherContainerWrap>
		</CityDetailsStyled>
	);
};

export default CityDetails;
