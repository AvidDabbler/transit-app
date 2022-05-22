import React, { Fragment, useMemo, useState } from 'react';
import { StopLocation, StopTime, WalkTime } from '../types';
import { Collapse } from './Collapse';
import { RouteUpdate } from './RouteUpdate';

interface StopUpdatePropType {
	stop: StopLocation;
	walkTime: WalkTime | undefined;
}

export const StopUpdate = ({ stop, walkTime }: StopUpdatePropType) => {
	const now = new Date().valueOf();
	return (
		<Collapse text={stop.stop_name}>
			<Fragment>
				{stop.times.map((time: StopTime) => (
					<RouteUpdate time={time} now={now} walkTime={walkTime} />
				))}
			</Fragment>
		</Collapse>
	);
};
