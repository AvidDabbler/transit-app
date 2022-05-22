import React, { Fragment, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState, StopLocation } from '../types';
import { StopUpdate } from './StopUpdate';

interface StopArrivalsProps {
	stops: StopLocation[];
}

export const StopArrivals = ({ stops }: StopArrivalsProps) => {
	const walkTimes = useSelector((state: RootState) => state.app.walkTimes);

	return (
		<Fragment>
			<div className="bottom-list">
				<Fragment>
					{stops.map((stop) => {
						const walkTime = walkTimes.find(
							(time) => time.stop_id === stop.stop_id
						);
						return <StopUpdate stop={stop} walkTime={walkTime} />;
					})}
				</Fragment>
			</div>
		</Fragment>
	);
};
