import { icon } from "../icon.js";

export const Fishing = icon("Fishing", "fishing", {
  nodes: [
    ["path", { d: "M3 21C7 12 11 7 18 3" }, { r: "tilt", a: 6, o: [3, 21] }],
    ["path", { d: "M18 3v8" }, { r: "swing", d: 0.1, a: 10, o: [18, 3] }],
    ["path", { d: "M18 11c2 1.5 2 4.5 0 6-2-1.5-2-4.5 0-6" }, { r: "swing", d: 0.1, a: 10, o: [18, 3] }],
    ["path", { d: "m16 20 2-3 2 3" }, { r: "swing", d: 0.1, a: 10, o: [18, 3] }],
  ],
});
