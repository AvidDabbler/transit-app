import React from 'react';
import { GiWalkingBoot } from 'react-icons/gi';
import { IoMdTime } from 'react-icons/io';
import { ProgressBar } from './ProgressBar';

export const RouteUpdate = () => {
	return (
		<div className="route-stop-info">
			<h2 className="route-name">Route 1</h2>
			<ProgressBar />
			<div className="w-2/3 flex flex-col">
				<div className="flex items-center flex-row my-1 justify-around">
					<GiWalkingBoot size={30} />
					<span>3min</span>
				</div>
				<div className="flex items-center flex-row my-1 justify-around">
					<IoMdTime size={30} />
					<span>10min</span>
				</div>
			</div>
		</div>
	);
};
