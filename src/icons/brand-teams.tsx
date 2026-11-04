import { createIcon } from "../runtime/createIcon.js";

export const BrandTeams = createIcon("BrandTeams", "brand-teams", {
  nodes: [
    ["rect", { x: "2", y: "7", width: "12", height: "12", rx: "2" }, { r: "press", a: 0.04, o: [8, 13] }],
    ["path", { d: "M5 10.5h6M8 10.5v5" }, { r: "pop", d: 0.05, o: [8, 13] }],
    ["circle", { cx: "18.5", cy: "6", r: "2" }, { r: "rise", d: 0.12, a: 2, o: [18.5, 6] }],
    ["path", { d: "M14 10h6.5a1.5 1.5 0 0 1 1.5 1.5V15a3.5 3.5 0 0 1-6.5 1.8" }, { r: "rise", d: 0.12, a: 2, o: [18, 13] }],
  ],
});
