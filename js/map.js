var testData = {
  max: 8,
  data: [{lat: 38.8951, lng: -77.0364, weight: 10},{lat: 39.7951, lng: -76.1364, weight: 1}]
};

var cfg = {
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  // if scaleRadius is false it will be the constant radius used in pixels
  "radius": 0.8,
  "maxOpacity": .8,
  // scales the radius based on map zoom
  "scaleRadius": true,
  // if set to false the heatmap uses the global maximum for colorization
  // if activated: uses the data maximum within the current map boundaries
  //   (there will always be a red spot with useLocalExtremas true)
  "useLocalExtrema": false,
  // which field name in your data represents the latitude - default "lat"
  latField: 'lat',
  // which field name in your data represents the longitude - default "lng"
  lngField: 'lng',
  // which field name in your data represents the data value - default "value"
  valueField: 'weight'
};
var heatmapLayer = new HeatmapOverlay(cfg);

var baseLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 8,
  minZoom: 5,
  attribution: "&copy; OpenStreetMap contributors",
});

var map = new L.Map("map", {
  center: new L.LatLng(38.75, -94.57),
  zoom: 4,
  layers: [baseLayer, heatmapLayer]
});

heatmapLayer.setData(testData);
