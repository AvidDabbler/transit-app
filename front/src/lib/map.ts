import { loadModules } from 'esri-loader';
import { layers } from '../config/layers';

const constantLocation = [];

class MapController {
	initMap = async () => {
		const [Map, MapView, FeatureLayer] = await loadModules([
			'esri/Map',
			'esri/views/MapView',
			'esri/layers/FeatureLayer'
		]);
		const map = new Map({
			basemap: 'topo-vector',
		});

		
		const mapView = new MapView({
			map: map,
			center: [-90.25624589935357, 38.605587033835604],
			zoom: 15,
			container: 'map',
		});
		
		map.addMany(layers.map(layer => new FeatureLayer(layer)));
	};
}

export const mapController = new MapController();
