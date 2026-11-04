import { createIcon } from "../runtime/createIcon.js";

export const CloudRainWind = createIcon("CloudRainWind", "cloud-rain-wind", {
  nodes: [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }, { r: "float", a: 1, o: [12.002, 9.622] }],
    ["path", { d: "m9.2 22 3-7" }, { r: "drop", d: 0.1, x: -0.4, a: -3, o: [10.7, 18.5] }],
    ["path", { d: "m9 13-3 7" }, { r: "drop", x: -0.4, a: -3, o: [7.5, 16.5] }],
    ["path", { d: "m17 13-3 7" }, { r: "drop", d: 0.2, x: -0.4, a: -3, o: [15.5, 16.5] }],
  ],
});
