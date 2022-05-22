import React, { Fragment } from 'react';
import { StopLocation } from '../types';
import { StopUpdate } from './StopUpdate';

interface StopArrivalsProps {
	stops: StopLocation[];
}

export const StopArrivals = ({ stops }: StopArrivalsProps) => {
	return (
		<Fragment>
			<div className="bottom-list">
				{stops.map((stop) => {
					return <StopUpdate stop={stop} />;
				})}
			</div>
		</Fragment>
	);
};
