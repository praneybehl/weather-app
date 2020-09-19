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
