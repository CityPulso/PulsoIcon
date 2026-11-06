import { icon } from "../icon.js";

export const AirVent = icon("AirVent", "air-vent", {
  nodes: [
    ["path", { d: "M18 17.5a2.5 2.5 0 1 1-4 2.03V12" }, { r: "sway", d: 0.05, a: 10, o: [12, 12] }],
    ["path", { d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }, { r: "press", a: 0.04, o: [12, 7.5] }],
    ["path", { d: "M6 8h12" }, { r: "press", a: 0.04, o: [12, 7.5] }],
    ["path", { d: "M6.6 15.572A2 2 0 1 0 10 17v-5" }, { r: "sway", d: 0.05, a: 10, o: [12, 12] }],
  ],
});
