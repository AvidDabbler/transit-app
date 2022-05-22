export interface AppState {
	time: string;
	date: string;
	stops: StopLocation[];
}

export interface RootState {
	app: AppState;
}

export interface StopLocation {
	stop_id: string;
	stop_code: null | string;
	stop_name: string;
	tts_stop_name: null | string;
	stop_desc: null | string;
	stop_lat: number;
	stop_lon: number;
	zone_id: null | string;
	stop_url: null | string;
	location_type: null | string;
	parent_station: null | string;
	stop_timezone: null | string;
	wheelchair_boarding: null | string;
	level_id: null | string;
	platform_code: null | string;
	times: StopTime[];
}

export interface StopTime {
	id: number;
	trip_id: string;
	arrival_time: string;
	arrival_timestamp: number;
	departure_time: string;
	departure_timestamp: number;
	stop_id: string;
	stop_sequence: number;
	stop_headsign: null | string;
	pickup_type: null | string;
	drop_off_type: null | string;
	continuous_pickup: null | string;
	continuous_drop_off: null | string;
	shape_dist_traveled: null | string;
	timepoint: null | string;
	route_long_name: string;
	route_short_name: string;
}
