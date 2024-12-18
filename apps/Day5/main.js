const arcgisMap = document.querySelector("arcgis-map");
const code = document.querySelector("#code");
const card = document.querySelector("#card");

arcgisMap.addEventListener("arcgisViewChange", () => {
  card.loading = !arcgisMap.stationary;
  console.log("arcgisMap::stationary", arcgisMap.stationary);
  console.log("arcgisMap::zoom", arcgisMap.zoom);
  if (arcgisMap.stationary && arcgisMap.ready) {
    code.innerText = `
Scale:${arcgisMap.scale}
Extent:\n${JSON.stringify(arcgisMap.extent.toJSON(), null, 4)}
Center:\n${JSON.stringify(arcgisMap.center.toJSON(), null, 4)}`;
  }
});
