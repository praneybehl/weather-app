import React, { FC } from 'react';
import ResponsiveImage from '../ResponsiveImage';
import { getResponsiveIconSrc } from '../../utils';
import {
	Subtitle,
	CityName,
	Temperature,
	TemperatureWrap,
	TileStyled,
	LowHighTemp,
	IconText
} from './styles';

export interface WeatherTileProps {
	routeParam: number | undefined;
	cityName: string | undefined;
	icon: string;
	description: string;
	iconType: string;
	temperature: number;
	minTemp: number;
	maxTemp: number;
}

// CurrencyTile component
const WeatherTile: FC<WeatherTileProps> = ({
	cityName,
	routeParam,
	icon,
	iconType,
	temperature,
	minTemp,
	maxTemp,
	description
}) => {
	const iconProps = getResponsiveIconSrc(icon);
	return (
		<article>
			<TileStyled
				to={`/city/${routeParam}/${cityName}`}
				role="navigation"
				aria-label={`Click for more details for ${cityName} weather`}
			>
				<div>
					<ResponsiveImage
						size={[50, 100]}
						mt={['-1.6rem', '-3.2rem']}
						alt={iconType}
						{...iconProps}
					/>
					<IconText>{iconType}</IconText>
				</div>
				<div>
					<CityName>{cityName}</CityName>
					<Subtitle>{description}</Subtitle>
				</div>
				<div>
					<TemperatureWrap>
						<Temperature aria-label="current temperature">{temperature}°</Temperature>
						<LowHighTemp aria-label="today's minimum and maximum temperature">
							{minTemp}°/{maxTemp}°
						</LowHighTemp>
					</TemperatureWrap>
				</div>
			</TileStyled>
		</article>
	);
};

export default WeatherTile;
