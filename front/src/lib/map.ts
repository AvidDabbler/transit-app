import { loadModules } from 'esri-loader';
import { layers } from '../config/layers';
import { appActions, store } from '../store/store';
class MapController {
	map: __esri.Map;
	mapView: __esri.MapView;

	initMap = async (): Promise<void> => {
		const [Map, MapView, FeatureLayer, Point] = await loadModules([
			'esri/Map',
			'esri/views/MapView',
			'esri/layers/FeatureLayer',
			'esri/geometry/Point',
		]);
		this.map = new Map({
			basemap: 'topo-vector',
		});

		this.mapView = new MapView({
			map: this.map,
			center: [-90.25624589935357, 38.605587033835604],
			zoom: 15,
			container: 'map',
		});

		this.map.addMany(layers.map((layer) => new FeatureLayer(layer)));
	};

	initWalkTime = async () => {
		const curLayer = this.map.findLayerById(
			'current_location'
		) as __esri.FeatureLayer;
		const curLocation = await curLayer.queryFeatures();
		const stops = this.map.findLayerById('stops') as __esri.FeatureLayer;
		const collection = await stops.queryFeatures();

		const _walkTimes = [];
		for (const stop of collection.features) {
			_walkTimes.push(
				await this.calcWalkTime(stop, curLocation.features.at(0))
			);
		}
		store.dispatch(appActions.setWalkTimes(_walkTimes));
	};

	calcWalkTime = async (
		stop: __esri.Graphic,
		location: __esri.Graphic | any
	): Promise<{ time: number; stop_id: string } | void> => {
		if (!this.map || !this.mapView) return;
		const [geometryEngine] = await loadModules([
			'esri/geometry/geometryEngine',
		]);

		return {
			time: Math.floor(
				(geometryEngine.distance(stop.geometry, location.geometry, 'miles') /
					3) *
					60
			),
			stop_id: stop.attributes.stop_id,
		};
	};
}

export const mapController = new MapController();
