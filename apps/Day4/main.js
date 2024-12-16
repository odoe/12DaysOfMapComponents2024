const mapElement = document.querySelector("arcgis-map");

function handleMapLoad() {
  console.log("Map loaded?", mapElement.ready);
  console.log(mapElement.map.layers.toArray());
}

if (mapElement.ready) {
  handleMapLoad();
} else {
  mapElement.addEventListener("arcgisViewReadyChange", handleMapLoad, {
    once: true,
  });
}
