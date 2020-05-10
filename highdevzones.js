mapboxgl.accessToken = 'pk.eyJ1IjoiYmVubnlmcmllZG1hbjIiLCJhIjoiY2s5YzIwZHliMDBqaDNsbjgyeXB1MDdybCJ9.FANNsUZRFIzmBFsaRdq2SQ';
var map = new mapboxgl.Map({
  container: 'LAmap', // container id
  style: 'mapbox://styles/bennyfriedman2/ck9cf2hhc0hmi1ip7ceeqgn8q', // stylesheet location
  center: [-118.24368, 34.05223], // starting position [lng, lat]
  zoom: 9,// starting zoom
  pitch: 60
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, "top-left");

map.on('load', function() {
  // Insert the layer beneath any symbol layer.
  var layers = map.getStyle().layers;

  var labelLayerId;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
      labelLayerId = layers[i].id;
      break;
    }
  }

  map.addLayer({
      'id': '3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
        'fill-extrusion-color': '#aaa',

        // use an 'interpolate' expression to add a smooth transition effect to the
        // buildings as the user zooms in
        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          15.05,
          ['get', 'height']
        ],
        'fill-extrusion-base': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          15.05,
          ['get', 'min_height']
        ],
        'fill-extrusion-opacity': 1
      }
    },
    labelLayerId
  );
});




mapboxgl.accessToken = 'pk.eyJ1IjoiYmVubnlmcmllZG1hbjIiLCJhIjoiY2s5YzIwZHliMDBqaDNsbjgyeXB1MDdybCJ9.FANNsUZRFIzmBFsaRdq2SQ';
var map2 = new mapboxgl.Map({
  container: 'SFmap', // container id
  style: 'mapbox://styles/bennyfriedman2/ck9d8micy00w41jrxh1lhmz54', // stylesheet location
  center: [-122.431297, 37.773972], // starting position [lng, lat]
  zoom: 11, // starting zoom
  pitch: 60,
  antialias: true
    });

var nav = new mapboxgl.NavigationControl();
map2.addControl(nav, "top-left");

map2.on('load', function() {
  // Insert the layer beneath any symbol layer.
  var layers = map.getStyle().layers;

  var labelLayerId;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
      labelLayerId = layers[i].id;
      break;
    }
  }

  map2.addLayer({
      'id': '3d-buildings',
      'source': 'composite',
      'source-layer': 'building',
      'filter': ['==', 'extrude', 'true'],
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
        'fill-extrusion-color': '#aaa',

        // use an 'interpolate' expression to add a smooth transition effect to the
        // buildings as the user zooms in
        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          15.05,
          ['get', 'height']
        ],
        'fill-extrusion-base': [
          'interpolate',
          ['linear'],
          ['zoom'],
          15,
          0,
          15.05,
          ['get', 'min_height']
        ],
        'fill-extrusion-opacity': 1
      }
    },
    labelLayerId
  );
});
