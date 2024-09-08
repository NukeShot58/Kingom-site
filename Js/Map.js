// var map = L.map('map_img_container', {
//     crs: L.CRS.Simple,
//     minZoom: -5
// });
// var bounds = [[0, 0], [6362, 8157]];
// var image = L.imageOverlay('img/map.jpg', bounds).addTo(map);
// map.fitBounds(bounds);
// console.log("works")

var mymap = L.map('map_img_container').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
