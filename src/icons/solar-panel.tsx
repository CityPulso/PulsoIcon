import { createIcon } from "../runtime/createIcon.js";

export const SolarPanel = createIcon("SolarPanel", "solar-panel", {
  nodes: [
    ["path", { d: "M11 2h2" }, { r: "flicker", d: 0.05, o: [8, 7] }],
    ["path", { d: "m14.28 14-4.56 8" }, { r: "press", a: 0.04, o: [12, 18] }],
    ["path", { d: "m21 22-1.558-4H4.558" }, { r: "turn", a: 6, o: [12, 20] }],
    ["path", { d: "M3 10v2" }, { r: "flicker", d: 0.09, o: [8, 7] }],
    ["path", { d: "M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z" }, { r: "turn", a: 6, o: [12, 20] }],
    ["path", { d: "M7 2a4 4 0 0 1-4 4" }, { r: "flicker", d: 0.13, o: [8, 7] }],
    ["path", { d: "m8.66 7.66 1.41 1.41" }, { r: "flicker", d: 0.17, o: [8, 7] }],
  ],
});
