import React, { Fragment} from 'react';
import { useSelector } from 'react-redux';
import { RootState, StopLocation, StopTime, WalkTime } from '../types';
import { Collapse } from './Collapse';
import { RouteUpdate } from './RouteUpdate';

interface StopUpdatePropType {
	stop: StopLocation;
	walkTime: WalkTime | undefined;
}

export const StopUpdate = ({ stop, walkTime }: StopUpdatePropType) => {
	const now = new Date().valueOf();
	const activeStop = useSelector((state: RootState) => state.app.activeStop);
	return (
		<Collapse
			text={stop.stop_name}
			isOpen={activeStop === stop.stop_id}
			stop_id={stop.stop_id}>
			<Fragment>
				{stop.times.map((time: StopTime) => (
					<RouteUpdate time={time} now={now} walkTime={walkTime} />
				))}
			</Fragment>
		</Collapse>
	);
};
