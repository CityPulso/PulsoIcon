import { createIcon } from "../runtime/createIcon.js";

export const BrandXd = createIcon("BrandXd", "brand-xd", {
  nodes: [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }, { r: "press", a: 0.04, o: [12, 12] }],
    ["path", { d: "m6 8 4.5 8m0-8L6 16" }, { r: "draw", d: 0.05, o: [8.25, 12] }],
    ["path", { d: "M17.5 8v8" }, { r: "grow", d: 0.15, o: [17.5, 8] }],
    ["circle", { cx: "15", cy: "13.5", r: "2.5" }, { r: "pop", d: 0.2, o: [15, 13.5] }],
  ],
});
