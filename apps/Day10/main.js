const shellPanelStart = document.getElementById("shell-panel-start");
const panelLayers = document.getElementById("panel-layers");
const panelLegend = document.getElementById("panel-legend");
const actionsStart = shellPanelStart?.querySelectorAll("calcite-action");
const mapElement = document.getElementById("map");
const headingElement = document.getElementById("appHeading");
const loader = document.querySelector("calcite-loader");

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

// MutationObserver to detect when the mapElement is updating
const observer = new MutationObserver((mutationsList) => {
  for (let mutation of mutationsList) {
    if (mutation.type === "attributes") {
      console.log("The mapElement is updating", mapElement.updating);
      loader.hidden = !mapElement.updating;
    }
  }
});

observer.observe(mapElement, { attributeFilter: ["updating"] });
