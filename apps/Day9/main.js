// ArcGIS Imports
const MapImageLayer = await $arcgis.import("esri/layers/MapImageLayer");
// import "@arcgis/core/layers/MapImageLayer";
// elements
const shellPanelStart = document.getElementById("shell-panel-start");
const panelLayers = document.getElementById("panel-layers");
const panelLegend = document.getElementById("panel-legend");
const actionsStart = shellPanelStart?.querySelectorAll("calcite-action");
const mapElement = document.getElementById("map");
const headingElement = document.getElementById("appHeading");

const renderer = {
  type: "simple",
  symbol: {
    type: "simple-line",
    color: [255, 255, 255, 0.5],
    width: 0.75,
    style: "long-dash-dot-dot",
  },
};

const layer = new MapImageLayer({
  url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer",
  sublayers: [
    {
      id: 2,
      visible: true,
    },
    {
      id: 4,
      visible: false,
      title: "Railroads",
      renderer: renderer,
      source: {
        type: "data-layer",
        dataSource: {
          type: "table",
          workspaceId: "MyDatabaseWorkspaceIDSSR2",
          dataSourceName: "ss6.gdb.Railroads",
        },
      },
    },
    {
      id: 1,
      visible: true,
    },
    {
      id: 0,
      visible: true,
    },
  ],
});

mapElement.addEventListener(
  "arcgisViewReadyChange",
  () => {
    const { title } = mapElement.map.portalItem;
    headingElement.heading = title;

    // add the layer to the map
    mapElement.addLayer(layer);
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
