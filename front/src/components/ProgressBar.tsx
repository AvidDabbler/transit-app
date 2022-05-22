import React from 'react';

export const ProgressBar = () => {
	const Parentdiv = {
		height: '20px',
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: 50,
	};

	const Childdiv = {
		height: '100%',
		width: `20%`,
		backgroundColor: 'red',
		borderRadius: 40,
		textAlign: 'right',
	};

	return (
		<div className='progress-bar'>
			<div className='progress' style={{width: '30%'}}></div>
		</div>
	);
};
