import React, { Fragment, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Collapse as Collapsable } from 'react-collapse';
import { useDispatch } from 'react-redux';
import { appActions } from '../store/store';

interface CollapseType {
	stop_id: string;
	isOpen: boolean;
	text: string;
	children: JSX.Element;
}

export const Collapse = ({ stop_id, isOpen, text, children }: CollapseType) => {
	const dispatch = useDispatch();
	return (
		<div className="h-full">
			<div className="collapse">
				<h2 className="h2">{text}</h2>
				<button onClick={() => dispatch(appActions.setActiveStop(stop_id))}>
					<RiArrowDownSLine
						className={`carrot ${isOpen ? '' : 'closed'}`}
						size={30}
					/>
				</button>
			</div>
			<Collapsable isOpened={isOpen}>{children}</Collapsable>
		</div>
	);
};
