import { Fragment, useEffect } from 'react';
import { Phone } from './components/phone/Phone';
import { Collapse } from './components/Collapse';
import { RouteUpdate } from './components/RouteUpdate';
import { updateStops } from './lib/api';
import './App.scss';

function App() {
	useEffect(() => {
		updateStops();
	}, []);

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
