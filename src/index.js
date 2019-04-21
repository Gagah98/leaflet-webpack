import {
  map as initMap,
  tileLayer,
} from 'leaflet'

import climb from "./climbing.js"

const map = initMap('map').setView([46.7785, 6.6412], 13)

const osmCH = tileLayer('https://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  bounds: [[45, 5], [48, 11]]
})


L.geoJSON(
  // un objet GeoJSON
  climb,
  // options
  // ici nous ajoutons un "popup" à chaque "feature" affichant la propriété "name"
  {
    onEachFeature: (feature, layer) => layer.bindPopup(feature.properties.name),
  }
).addTo(map)



osmCH.addTo(map)