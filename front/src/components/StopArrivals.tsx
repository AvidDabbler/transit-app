import React, { Fragment } from 'react';
import { StopLocation } from '../types';
import { Collapse } from './Collapse';
import { RouteUpdate } from './RouteUpdate';

interface StopArrivalsProps {
	stops: StopLocation;
}

export const StopArrivals = ({stops}: StopArrivalsProps) => {
	return (
		<Fragment>
			<div className="map"></div>
			<div className="bottom-list">
				<Collapse text="Grand & Utah">
					<Fragment>
						<RouteUpdate />
						<RouteUpdate />
						<RouteUpdate />
					</Fragment>
				</Collapse>
			</div>
		</Fragment>
	);
};
