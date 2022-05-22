import React, { Fragment } from 'react';
import { StopLocation, StopTime } from '../types';
import { Collapse } from './Collapse';
import { RouteUpdate } from './RouteUpdate';
import { StopUpdate } from './StopUpdate';

interface StopArrivalsProps {
	stops: StopLocation[];
}

export const StopArrivals = ({ stops }: StopArrivalsProps) => {
	return (
		<Fragment>
			<div className="map"></div>
			<div className="bottom-list">
				{/* <Collapse text="Grand & Utah">
					<Fragment>
						<RouteUpdate />
						<RouteUpdate />
						<RouteUpdate />
					</Fragment>
				</Collapse> */}
				{stops.map((stop) => {
					return <StopUpdate stop={stop} />;
				})}
			</div>
		</Fragment>
	);
};
