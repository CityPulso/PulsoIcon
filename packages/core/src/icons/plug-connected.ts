import { icon } from "../icon.js";

export const PlugConnected = icon("PlugConnected", "plug-connected", {
  nodes: [
    ["path", { d: "m7 12 5 5-2.5 2.5a3.54 3.54 0 0 1-5-5z" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [8, 16] }],
    ["path", { d: "m17 12-5-5 2.5-2.5a3.54 3.54 0 0 1 5 5z" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [16, 8] }],
    ["path", { d: "m3 21 2.5-2.5" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [4, 20] }],
    ["path", { d: "M18.5 5.5 21 3" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [20, 4] }],
    ["path", { d: "m10 11-2 2" }, { r: "flicker", d: 0.3, o: [9, 12] }],
    ["path", { d: "m13 14-2 2" }, { r: "flicker", d: 0.35, o: [12, 15] }],
  ],
});
