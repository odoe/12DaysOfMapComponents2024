const WebMap = await $arcgis.import("esri/WebMap");

const webmap1 = new WebMap({
  portalItem: {
    id: "0d20687f129f46aaaa0f4ccb76cad460",
    portal: {
      url: import.meta.env.VITE_PORTAL_URL,
    },
  },
});

const webmap2 = new WebMap({
  portalItem: {
    id: "66bf7d61948b4ef48aea94327b504f86",
  },
});

const map1 = document.querySelector("#map1");
const map2 = document.querySelector("#map2");

map1.map = webmap1;
map2.map = webmap2;
