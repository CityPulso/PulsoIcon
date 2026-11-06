import { icon } from "../icon.js";

export const Gauge = icon("Gauge", "gauge", {
  nodes: [
    ["path", { d: "m12 14 4-4" }, { r: "turn", d: 0.05, a: -60, o: [12, 14] }],
    ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0" }, { r: "press", a: 0.04, o: [12, 11.5] }],
  ],
});
