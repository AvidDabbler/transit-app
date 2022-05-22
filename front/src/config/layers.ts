export const layers = [
	{
		id: 'stops',
		url: 'https://services8.arcgis.com/ItkjXcpNwMie4pPj/ArcGIS/rest/services/Transit_app_layers/FeatureServer/0',
	},
	{
		id: 'route',
		url: 'https://services8.arcgis.com/ItkjXcpNwMie4pPj/ArcGIS/rest/services/Transit_app_layers/FeatureServer/1',
	},
	{
		id: 'current_location',
		url: 'https://services8.arcgis.com/ItkjXcpNwMie4pPj/ArcGIS/rest/services/current_location/FeatureServer/0',
		renderer: {
			type: 'simple', // autocasts as new SimpleRenderer()
			symbol: {
				type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
				size: 5,
				color: [0, 123, 229],
				outline: '#000',
			},
		},
	},
];
