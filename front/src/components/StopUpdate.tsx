import React, { Fragment, useMemo, useState } from 'react';
import { mapController } from '../lib/map';
import { StopLocation, StopTime } from '../types';
import { Collapse } from './Collapse';
import { RouteUpdate } from './RouteUpdate';

interface StopUpdatePropType {
	stop: StopLocation;
}

export const StopUpdate = ({ stop }: StopUpdatePropType) => {
	const now = new Date().valueOf();
	return (
		<Collapse text={stop.stop_name}>
			<Fragment>
				{stop.times.map((time: StopTime) => (
					<RouteUpdate time={time} now={now} />
				))}
			</Fragment>
		</Collapse>
	);
};
