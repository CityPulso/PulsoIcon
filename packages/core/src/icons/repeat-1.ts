import { icon } from "../icon.js";

export const Repeat1 = icon("Repeat1", "repeat-1", {
  nodes: [
    ["path", { d: "m17 2 4 4-4 4" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "m7 22-4-4 4-4" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }, { r: "spin", a: 180, o: [12, 12] }],
    ["path", { d: "M11 10h1v4" }, { r: "stamp", d: 0.2, a: 0.3, o: [11.5, 12] }],
  ],
});
