import React, { Children, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Collapse as Collapsable } from 'react-collapse';

interface CollapseType {
	text: string;
	children: JSX.Element;
}

export const Collapse = ({ text, children }: CollapseType) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div>
			<div className="collapse">
				<h2 className="h2">{text}</h2>
				<RiArrowDownSLine
					onClick={() => setIsOpen(!isOpen)}
					className="carrot"
					size={30}
				/>
			</div>
			<Collapsable isOpened={isOpen}>{children}</Collapsable>
		</div>
	);
};
