import React from 'react'

interface CollapseType{
	text: string;
}

export const Collapse = ({text}:CollapseType) => {
	return (
		<div className='collapse'>
			<h2 className='h2'>{text}</h2>
		</div>
	)
}
