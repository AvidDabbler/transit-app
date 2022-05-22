import { useEffect } from 'react';
import { Phone } from './components/phone/Phone';
import { updateStops } from './lib/api';
import { StopArrivals } from './components/StopArrivals';
import { useSelector } from 'react-redux';
import { RootState } from './types';
import { mapController } from './lib/map';
import './App.scss';

function App() {
	const stops = useSelector((state: RootState) => state.app.stops);

	const loadPage = async () => {
		await mapController.initMap();
		await mapController.initWalkTime();
		const timer = setInterval(() => updateStops(), 1000);
		return () => clearInterval(timer);
	};

	useEffect(() => {
		loadPage();
	}, []);

	return (
		<div className="App">
			<Phone>
				<div className="phone-content">
					<div id="map" />
					{stops && <StopArrivals stops={stops} />}
				</div>
			</Phone>
		</div>
	);
}

export default App;
