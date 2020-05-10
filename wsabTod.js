
mapboxgl.accessToken = 'pk.eyJ1IjoiYmVubnlmcmllZG1hbjIiLCJhIjoiY2s5YzIwZHliMDBqaDNsbjgyeXB1MDdybCJ9.FANNsUZRFIzmBFsaRdq2SQ';
var map = new mapboxgl.Map({
  container: 'wsab-tod', // container id
  style: 'mapbox://styles/bennyfriedman2/cka1g9zs730hk1in8juubtr2m', // stylesheet location
  center: [-118.220992, 33.983502], // starting position [lng, lat]
  zoom: 13, // starting zoom
  pitch: 60,
  antialias: true
    });

    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-left");
