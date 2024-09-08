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
    iconAnchor: [12, 40]
});
var markers = [];
$.getJSON('../Json/locations.json', function (Json) {
    for (let index = 0; index < 19; index++) {
        const element = Json[index];
        markers.push(L.marker(Json[index].lang, { icon: myIcon, title: Json[index].name }).bindPopup(Json[index].name).addTo(map));
    }
})
L.polyline([[
    3364.5,
    3918.5
], [
    2900.25,
    3590
]],{color: 'red'}).addTo(map);

// var mymap = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(mymap);
// console.log("works")