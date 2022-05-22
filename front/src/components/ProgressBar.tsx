import React from 'react';

interface ProgressBarType {
	walkTime: number;
	departTime: number;
}

export const ProgressBar = ({ walkTime, departTime }: ProgressBarType) => {
	const progress = () => {
		const percent = (walkTime / departTime) * 100;
		if (percent > 100) {
			return 100;
		} else {
			return percent;
		}
	};
	return (
		<div className="progress-bar">
			<div className="progress" style={{ width: `${progress()}%` }}></div>
		</div>
	);
};
