const shellPanelStart = document.getElementById("shell-panel-start");
const panelLayers = document.getElementById("panel-layers");
const panelLegend = document.getElementById("panel-legend");
const actionsStart = shellPanelStart?.querySelectorAll("calcite-action");
const mapElement = document.getElementById("map");
const headingElement = document.getElementById("appHeading");
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
    if (el.text === "Legend") {
      panelLayers.hidden = true;
    } else {
      panelLayers.hidden = false;
    }
    panelLegend.hidden = !panelLayers.hidden;
  });
});
