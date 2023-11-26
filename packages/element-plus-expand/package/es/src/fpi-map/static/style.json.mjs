const version = 8;
const metadata = {};
const glyphs = "./static/fonts/{fontstack}/{range}.pbf";
const sources = {
  tdt_vec_c: {
    type: "raster",
    tiles: [
      "http://t0.tianditu.gov.cn/DataServer?T=vec_c&x={x}&y={y}&l={z}&tk=d5cbd0c27896bb8f535dc57ecef2718c"
    ],
    tileSize: 256
  },
  tdt_cva_c: {
    type: "raster",
    tiles: [
      "http://t0.tianditu.gov.cn/DataServer?T=cva_c&x={x}&y={y}&l={z}&tk=d5cbd0c27896bb8f535dc57ecef2718c"
    ],
    tileSize: 256
  },
  tdt_img_c: {
    type: "raster",
    tiles: [
      "http://t0.tianditu.gov.cn/DataServer?T=img_c&x={x}&y={y}&l={z}&tk=d5cbd0c27896bb8f535dc57ecef2718c"
    ],
    tileSize: 256
  },
  tdt_cia_c: {
    type: "raster",
    tiles: [
      "http://t0.tianditu.gov.cn/DataServer?T=cia_c&x={x}&y={y}&l={z}&tk=d5cbd0c27896bb8f535dc57ecef2718c"
    ],
    tileSize: 256
  }
};
const layers = [
  {
    id: "common_tdt_vec_c",
    type: "raster",
    source: "tdt_vec_c",
    layout: {
      visibility: "visible"
    }
  },
  {
    id: "common_tdt_cva_c",
    type: "raster",
    source: "tdt_cva_c",
    layout: {
      visibility: "visible"
    }
  },
  {
    id: "terrain_tdt_img_c",
    type: "raster",
    source: "tdt_img_c",
    layout: {
      visibility: "none"
    }
  },
  {
    id: "terrain_tdt_cia_c",
    type: "raster",
    source: "tdt_cia_c",
    layout: {
      visibility: "none"
    }
  }
];
const id = "x04sv9tch";
const styleJson = {
  version,
  metadata,
  glyphs,
  sources,
  layers,
  id
};
export {
  styleJson as default,
  glyphs,
  id,
  layers,
  metadata,
  sources,
  version
};
