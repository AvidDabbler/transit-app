import { Fragment, useEffect } from 'react';
import { Phone } from './components/phone/Phone';
import { updateStops } from './lib/api';
import './App.scss';
import { StopArrivals } from './components/StopArrivals';
import { useSelector } from 'react-redux';
import { RootState } from './types';
import { mapController } from './lib/map';

function App() {
	const stops = useSelector((state: RootState) => state.app.stops);

	useEffect(() => {
		mapController.initMap();
		updateStops();
	}, []);

	return (
		<div className="App">
			<Phone>
				<div className='phone-content'>
					<div id="map" />
					{stops && <StopArrivals stops={stops} />}
				</div>
			</Phone>
		</div>
	);
}

export default App;
