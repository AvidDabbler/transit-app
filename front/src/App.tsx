import { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Phone } from './components/phone/Phone';
import { Collapse } from './components/Collapse';
import { ProgressBar } from './components/ProgressBar';
import { GiWalkingBoot } from 'react-icons/gi';
import { IoMdTime } from 'react-icons/io';
import { RouteUpdate } from './components/RouteUpdate';

function App() {
	return (
		<div className="App">
			<Phone>
				<Fragment>
					<div className="map"></div>
					<div className="bottom-list">
						<Collapse text="Grand & Utah">
							<RouteUpdate />
							<RouteUpdate />
							<RouteUpdate />
						</Collapse>
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
						<Collapse text="Hey there" />
					</div>
				</Fragment>
			</Phone>
		</div>
	);
}

export default App;
