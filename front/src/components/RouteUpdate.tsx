import React, { useMemo, useState } from 'react';
import { GiWalkingBoot } from 'react-icons/gi';
import { IoMdTime } from 'react-icons/io';
import { calcDepartTime } from '../lib/time';
import { StopTime, WalkTime } from '../types';
import { ProgressBar } from './ProgressBar';

interface RouteUpdateProps {
	time: StopTime;
	now: number;
	walkTime: WalkTime | undefined;
}

export const RouteUpdate = ({ time, now, walkTime }: RouteUpdateProps) => {
	const departTime = calcDepartTime(now, time.departure_timestamp);

	return (
		<div className="route-stop-info">
			<h2 className="route-name">{time.route_long_name}</h2>
			<ProgressBar />
			<div className="w-2/3 flex flex-col">
				<div className="flex items-center flex-row my-1 justify-around">
					<GiWalkingBoot size={30} />
					<span>{walkTime ? walkTime.time : '--'}min</span>
				</div>
				<div className="flex items-center flex-row my-1 justify-around">
					<IoMdTime size={30} />
					<span>{departTime}min</span>
				</div>
			</div>
		</div>
	);
};
