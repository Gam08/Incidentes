var myMap = L.map('map').setView([19.285156826485405, -99.67620390675081], 5);

// Agregar un mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Cargar y mostrar el primer archivo GeoJSON
fetch('https://opendata.dc.gov/api/download/v1/items/c5a9f33ffca546babbd91de1969e742d/geojson?layers=6')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    L.geoJSON(data).addTo(myMap);
  });


