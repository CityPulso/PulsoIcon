import { icon } from "../icon.js";

// Adapted from Iconoir "keyframes-plus" (MIT, Copyright (c) 2021 Luca Burgio).
export const KeyframesPlus = icon("KeyframesPlus", "keyframes-plus", {
  nodes: [
    ["path", { d: "M2 12H5M8 12H5M5 12V9M5 12V15" }, { r: "spin", a: 90, o: [5, 12] }],
    [
      "path",
      {
        d: "M6.25 6L6.49485 5.72018C7.29167 4.80952 8.70833 4.80952 9.50515 5.72017L13.8476 10.683C14.5074 11.437 14.5074 12.563 13.8476 13.317L9.50515 18.2798C8.70833 19.1905 7.29167 19.1905 6.49485 18.2798L6.25 18",
      },
      { r: "slide", d: 0.1, x: 1, y: 0, a: 1.5 },
    ],
    ["path", { d: "M13 19L17.8844 13.3016C18.5263 12.5526 18.5263 11.4474 17.8844 10.6984L13 5" }, { r: "slide", d: 0.15, x: 1, y: 0, a: 1.5 }],
    ["path", { d: "M17 19L21.8844 13.3016C22.5263 12.5526 22.5263 11.4474 21.8844 10.6984L17 5" }, { r: "slide", d: 0.2, x: 1, y: 0, a: 1.5 }],
  ],
});
