var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2
});
var bounds = [[0, 0], [6362, 8157]];
var image = L.imageOverlay('img/map.jpg', bounds).addTo(map);
map.fitBounds(bounds);
var myIcon = L.icon({
    iconUrl: 'img/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12,20]
});

L.marker([3815,4000], {icon: myIcon}).bindPopup("Test</br>").addTo(map);

// var mymap = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(mymap);
// console.log("works")