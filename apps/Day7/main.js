const shellPanelStart = document.getElementById("shell-panel-start");
const panelLayers = document.getElementById("panel-layers");
const panelLegend = document.getElementById("panel-legend");
const panelBasemaps = document.getElementById("panel-basemaps");
const actionsStart = shellPanelStart?.querySelectorAll("calcite-action");
const mapElement = document.getElementById("map");
const headingElement = document.getElementById("appHeading");
const basemapGallery = document.querySelector("arcgis-basemap-gallery");

mapElement.addEventListener(
  "arcgisViewReadyChange",
  () => {
    const { title } = mapElement.map.portalItem;
    headingElement.heading = title;
  },
  { once: true },
);
actionsStart?.forEach((el) => {
  el.addEventListener("click", (event) => {
    actionsStart?.forEach((action) => (action.active = false));
    console.log(el.text);
    if (el.text === "Layers") {
      panelLayers.hidden = false;
      panelLegend.hidden = true;
      panelBasemaps.hidden = true;
    } else if (el.text === "Legend") {
      panelLegend.hidden = false;
      panelLayers.hidden = true;
      panelBasemaps.hidden = true;
    } else {
      panelBasemaps.hidden = false;
      panelLegend.hidden = true;
      panelLayers.hidden = true;
    }
  });
});

basemapGallery?.addEventListener("arcgisPropertyChange", (event) => {
  console.log("Property Change:", event.detail.name);
  console.log("Property Value:", basemapGallery[event.detail.name]);
});
