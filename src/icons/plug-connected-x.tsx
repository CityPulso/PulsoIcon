import { createIcon } from "../runtime/createIcon.js";

export const PlugConnectedX = createIcon("PlugConnectedX", "plug-connected-x", {
  nodes: [
    ["path", { d: "m6 11 5 5-2.5 2.5a3.54 3.54 0 0 1-5-5z" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [7, 15] }],
    ["path", { d: "m16 11-5-5 2.5-2.5a3.54 3.54 0 0 1 5 5z" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [15, 7] }],
    ["path", { d: "M2 22 4.5 19.5" }, { r: "slide", x: -1, y: 1, a: 1.5, o: [3, 21] }],
    ["path", { d: "M17.5 4.5 20 2" }, { r: "slide", x: 1, y: -1, a: 1.5, o: [19, 3] }],
    ["path", { d: "m16 16 5 5" }, { r: "draw", d: 0.15, o: [18.5, 18.5] }],
    ["path", { d: "m21 16-5 5" }, { r: "draw", d: 0.25, o: [18.5, 18.5] }],
  ],
});
